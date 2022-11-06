import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 用户注册
  router.post('/register', controller.user.register);
  // 用户登录
  router.post('/login', controller.user.login);
  // 退出登录
  router.post('/logout', controller.user.logout);
};
