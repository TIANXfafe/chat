import { Controller } from 'egg';
import crypto from 'crypto';

export default class UserController extends Controller {
  // 注册
  public async register() {
    const { ctx, app } = this;
    // 参数验证
    const { username, password, repassword } = ctx.request.body;
    if (password !== repassword) {
      ctx.throw(400, '两次密码不一致');
    }
    // 验证用户是否已经存在
    if (await app.model.User.findOne({
      where: { username },
    })) {
      ctx.throw(400, '账号已存在!');
    }
    // 创建用户
    const user = await app.model.User.create({
      username,
      password,
      sex: '保密',
    });
    if (!user) {
      ctx.throw(400, '创建账号失败!');
    }
    return ctx.apiSuccess(user);
  }
  // 登录
  public async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    let user = await app.model.User.findOne({
      where: {
        username,
        status: 1,
      },
    });
    if (!user) {
      ctx.throw(400, '用户不存在或已被禁用!');
    }
    user = JSON.parse(JSON.stringify(user));
    await this.checkPassword(password, user.password);
    const token = ctx.getToken(user);
    user.token = token;
    delete user.password;
    console.log('aaaa', token);
    if (!await this.service.cache.set(`user_${user.id}`, token)) {
      ctx.throw(400, '登录失败!');
    }
    return ctx.apiSuccess(user);
  }
  // 退出登录
  public async logout() {
    const { ctx, service } = this;
    const currentUserId = ctx.authUser.id;
    if (!await service.cache.remove(`user_${currentUserId}`)) {
      ctx.throw(400, '退出登录失败!');
    }
    ctx.apiSuccess('退出成功!');
  }
  // 查询用户信息
  public async fetchUserInfo() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    const user = await app.model.User.findOne({
      where: {
        id: currentUserId,
      },
      attributes: {
        exclude: [ 'password' ],
      },
    });
    if (!user) {
      ctx.throw(400, '用户不存在');
    }
    ctx.apiSuccess(user);
  }
  // 修改个人信息
  public async changeInfo() {
    const { ctx, app } = this;
    const { nickname, sex, avatar } = ctx.request.body;
    const currentUserId = ctx.authUser.id;
    const user = await app.model.User.findByPk(currentUserId);
    console.log('user', user);
    if (!user) {
      ctx.throw(400, '用户不存在');
    }
    let gender;
    switch (sex) {
      case 'male':
        gender = '男';
        break;
      case 'female':
        gender = '女';
        break;
      default:
        gender = '保密';
        break;
    }
    user.nickname = nickname;
    user.sex = gender;
    user.avatar = avatar;
    await user.save();
    ctx.apiSuccess('ok');
  }

  // 验证密码
  public async checkPassword(password, hash_password) {
    const { ctx, app } = this;
    const hmac = crypto
      .createHmac('sha256', app.config.crypto.secret)
      .update(password)
      .digest('hex');
    const res = hmac === hash_password;
    if (!res) {
      ctx.throw(400, '密码错误!');
    }
    return true;
  }
}
