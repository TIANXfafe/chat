import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 用户注册
  router.post('/register', controller.user.register);
  // 用户登录
  router.post('/login', controller.user.login);
  // 退出登录
  router.post('/logout', controller.user.logout);

  // 搜索用户
  router.post('/search/user', controller.search.user);

  // 申请添加好友
  router.post('/apply/addFriend', controller.apply.addFriend);
  // 获取好友申请列表
  router.post('/apply/:page', controller.apply.list);
  // 处理好友申请
  router.post('/apply/handle/:id', controller.apply.handle);

  // 通讯录列表
  router.get('/friend/list', controller.friend.list);
  // 查看好友资料
  router.get('/friend/read/:id', controller.friend.read);
  // 移入/移出黑名单
  router.post('/friend/setblack/:id', controller.friend.setBlack);
  // 设置/取消星标好友
  router.post('/friend/setstar/:id', controller.friend.setStar);
  // 设置朋友圈权限
  router.post('/friend/setMomentAuth/:id', controller.friend.setMomentAuth);
  // 设置备注和标签
  router.post('/friend/setRemarkTag/:id', controller.friend.setRemarkTag);

  // 举报
  router.post('/report/save', controller.report.save);

  app.ws.use(async (ctx, next) => {
    // 验证用户token
    let user = {};
    const token = ctx.query.token;
    try {
      user = ctx.checkToken(token);
      // 验证用户状态
      const userCheck = await app.model.User.findByPk((user as any).id);
      if (!userCheck) {
        ctx.websocket.send(JSON.stringify({
          msg: 'fail',
          data: '用户不存在!',
        }));
        return ctx.websocket.close();
      }
      if (!userCheck.status) {
        ctx.websocket.send(JSON.stringify({
          msg: 'fail',
          data: '您已被禁用!',
        }));
        return ctx.websocket.close();
      }
      // 用户上线
      (app.ws as any).user = (app.ws as any).user ? (app.ws as any).user : {};
      // 下线其他设备
      if ((app.ws as any).user[(user as any).id]) {
        (app.ws as any).user[(user as any).id].send(JSON.stringify({
          msg: 'fail',
          data: '您的账号在其他设备登录!',
        }));
        (app.ws as any).user[(user as any).id].close();
      }
      // 记录当前用户id
      ctx.websocket.user_id = (user as any).id;
      (app.ws as any).user[(user as any).id] = ctx.websocket;
      await next();
    } catch (err) {
      console.log(err);
      const fail = (err as any).name === 'TokenExpiredError'
        ? 'token已过期！请重新获取令牌！'
        : 'token令牌不合法';
      ctx.websocket.send(JSON.stringify({
        msg: 'fail',
        data: fail,
      }));
      // 关闭连接
      ctx.websocket.close();
    }
  });

  // websocket
  app.ws.route('/ws', controller.chat.connect);
};
