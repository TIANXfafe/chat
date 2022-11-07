import { Controller } from 'egg';

export default class ApplyController extends Controller {
  public async addFriend() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    const {friend_id, nickname, lookme, lookhim} = ctx.request.body;
    // 验证参数

    // 不能添加自己
    if (currentUserId === friend_id) {
      ctx.throw(400, '不能添加自己!');
    }
    // 对方是否存在
    const user = await app.model.User.findOne({
      where: {
        id: friend_id,
        status: 1
      }
    });
    if (!user) {
      ctx.throw(400, '用户不存在或已被封禁!');
    }
    // 是否申请过
    const apply = await app.model.Apply.findOne({
      where: {
        user_id: currentUserId,
        friend_id,
        status: ['pending', 'agree']
      }
    })
    if (apply) {
      ctx.throw(400, '您已申请过!');
    }
    // 创建申请
    const result = await app.model.Apply.create({
      user_id: currentUserId,
      friend_id,
      lookme,
      lookhim,
      nickname
    });
    if (!result) {
      ctx.throw(400, '申请失败!');
    }
    ctx.apiSuccess(result);
  }

  public async list() {
    const {ctx, app} = this;
    const currentUserId = ctx.authUser.id;
    const page = ctx.params.page ? parseInt(ctx.params.page) : 1;
    const limit = ctx.query.limit ? parseInt(ctx.query.limit) : 10;
    const offset = (page - 1) * limit;
    const result = await app.model.Apply.findAll({
      where: {
        friend_id: currentUserId
      },
      include: [{
        model: app.model.User,
        attributes: ['id', 'username', 'nickname', 'sex', 'avatar']
      }],
      offset,
      limit
    });
    const count = await app.model.Apply.count({
      where: {
        friend_id: currentUserId,
        status: 'pending'
      }
    });
    ctx.apiSuccess({result, count});
  }

  public async handle() {
    const {ctx, app} = this;
    const currentUserId = ctx.authUser.id;
    const id = parseInt(ctx.params.id);
    const {nickname, lookme, lookhim, status} = ctx.request.body;
    // 参数验证

    // 查询是否存在
    const apply = await app.model.Apply.findOne({
      where: {
        id,
        friend_id: currentUserId,
        status: 'pending'
      }
    });
    if (!apply) {
      ctx.throw(400, '该记录不存在!');
    }
    let transaction;
    try {
      // 开启事务
      transaction = await app.model.transaction();

      // 设置申请状态
      await apply.update({
        status
      }, {transaction});
      if (status === 'agree') {
        // 加入到对方好友列表
        if (!await app.model.Friend.findOne({
          where: {
            friend_id: currentUserId,
            user_id: apply.user_id
          }
        })) {
          await app.model.Friend.create({
            friend_id: currentUserId,
            user_id: apply.user_id,
            nickname: apply.nickname,
            lookme: apply.lookme,
            lookhim: apply.lookhim
          })
        }
        // 将对方加入到我的好友列表
        if (!await app.model.Friend.findOne({
          where: {
            friend_id: apply.user_id,
            user_id: currentUserId
          }
        })) {
          await app.model.Friend.create({
            friend_id: apply.user_id,
            user_id: currentUserId,
            nickname,
            lookme,
            lookhim
          })
        }
      }
      // 提交事务
      await transaction.commit();
      // 消息推送
      return ctx.apiSuccess('操作成功!');
    } catch (e) {
      // 事务回滚
      await transaction.rollback();
      return ctx.apiFail('操作失败!');
    }
  }
}
