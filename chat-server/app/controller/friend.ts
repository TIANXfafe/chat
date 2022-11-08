import { Controller } from 'egg';
import SortWord from 'sort-word';

export default class FriendController extends Controller {
  // 通讯录列表
  public async list() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    console.log('cc', currentUserId);
    const friends = await app.model.Friend.findAndCountAll({
      where: {
        user_id: currentUserId
      },
      include: [{
        model: app.model.User,
        as: 'friendInfo',
        attributes: ['id', 'username', 'nickname', 'avatar']
      }]
    });

    const res = friends.rows.map(item => {
      return {
        id: item.id,
        user_id: item.friendInfo.user_id,
        name: item.friendInfo.nickname
          ? item.friendInfo.nickname
          : item.friendInfo.username,
        nickname: item.friendInfo.nickname,
        avatar: item.friendInfo.avatar
      }
    })

    // 排序
    friends.rows = new SortWord(res, 'name');
    ctx.apiSuccess(friends);
  }

  // 查看好友资料
  public async read() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    const id = ctx.params.id ? parseInt(ctx.params.id) : 0;
    const friend = await app.model.Friend.findOne({
      where: {
        friend_id: id,
        user_id: currentUserId
      },
      include: [{
        model: app.model.User,
        as: 'friendInfo',
        attributes: {
          exclude: ['password']
        }
      }]
    });

    if (!friend) {
      ctx.throw(400, '用户不存在');
    }
    ctx.apiSuccess(friend)
  }

  // 移入/移出黑名单
  public async setBlack() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    const id = ctx.params.id ? parseInt(ctx.params.id) : 0;
    const isblack = ctx.request.body.isblack;
    const friend = await app.model.Friend.findOne({
      where: {
        friend_id: id,
        user_id: currentUserId
      }
    });
    if (!friend) {
      ctx.throw(400, '用户不存在');
    }
    friend.isblack = isblack;
    await friend.save();
    ctx.apiSuccess('ok');
  }

  // 设置/取消星标好友
  public async setStar() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    const id = ctx.params.id ? parseInt(ctx.params.id) : 0;
    const star = ctx.request.body.star;
    const friend = await app.model.Friend.findOne({
      where: {
        friend_id: id,
        user_id: currentUserId,
        isblack: 0
      }
    });
    if (!friend) {
      ctx.throw(400, '用户不存在');
    }
    friend.star = star;
    await friend.save();
    ctx.apiSuccess('ok');
  }

  // 设置朋友圈权限
  public async setMomentAuth() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    const id = ctx.params.id ? parseInt(ctx.params.id) : 0;
    const {lookme, lookhim} = ctx.request.body;
    const friend = await app.model.Friend.findOne({
      where: {
        friend_id: id,
        user_id: currentUserId,
        isblack: 0
      }
    });
    if (!friend) {
      ctx.throw(400, '用户不存在');
    }
    friend.lookhim = lookhim;
    friend.lookme = lookme;
    await friend.save();
    ctx.apiSuccess('ok');
  }

  // 设置备注和标签
  public async setRemarkTag() {
    const { ctx, app } = this;
    const current_user_id = ctx.authUser.id;
    const id = ctx.params.id ? parseInt(ctx.params.id) : 0;
    const { tags, nickname } = ctx.request.body;
    // 参数验证
    // 查看该好友是否存在
    const friend = await app.model.Friend.findOne({
      where: {
        user_id: current_user_id,
        friend_id: id,
        isblack: 0
      },
      include: [{
        model: app.model.Tag
      }]
    });
    if (!friend) {
      ctx.throw(400, '该记录不存在');
    }

    // // 设置备注
    friend.nickname = nickname;
    await friend.save();

    // 获取当前用户所有标签
    const allTags = await app.model.Tag.findAll({
      where: {
        user_id: current_user_id
      }
    });

    const allTagsName = allTags.map(item => item.name);

    // 新标签
    let newTags = tags.split(',');

    // 需要添加的标签
    let addTags = newTags.filter(item => !allTagsName.includes(item));
    addTags = addTags.map(name => {
      return {
        name,
        user_id: current_user_id
      }
    });
    // 写入tag表
    const resAddTags = await app.model.Tag.bulkCreate(addTags);
    console.log('resAddTags', resAddTags)

    // 找到新标签的id
    newTags = await app.model.Tag.findAll({
      where: {
        user_id: current_user_id,
        name: newTags
      }
    });

    let oldTagsIds = friend.tags.map(item => item.id);
    let newTagsIds = newTags.map(item => item.id);

    let addTagsIds = newTagsIds.filter(id => !oldTagsIds.includes(id));
    let delTagsIds = oldTagsIds.filter(id => !newTagsIds.includes(id));

    // 添加关联关系
    addTagsIds = addTagsIds.map(tag_id => {
      return {
        tag_id,
        friend_id: friend.id
      }
    });

    app.model.FriendTag.bulkCreate(addTagsIds);

    // 删除关联关系
    app.model.FriendTag.destroy({
      where: {
        tag_id: delTagsIds,
        friend_id: friend.id
      }
    });

    ctx.apiSuccess('ok');
  }
}
