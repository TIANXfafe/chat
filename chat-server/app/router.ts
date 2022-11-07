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
};
