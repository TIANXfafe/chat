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
};
