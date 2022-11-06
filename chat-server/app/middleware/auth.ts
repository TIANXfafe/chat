module.exports = ({}, app) => {
  return async (ctx, next) => {
    // 获取header头token
    const {token = ''} = ctx.header;
    if (!token) {
      return ctx.apiFail('您没有权限访问该接口!');
    }

    // 根据token解密，换取用户信息
    let user: {id?: number, status?: number} = {};
    try {
      // token验证
      user = ctx.checkToken(token);
    } catch (error: any) {
      let fail = error.name === 'TokenExpiredError'
        ? 'token已过期!请重新获取令牌'
        : 'token令牌不合法!';
      ctx.throw(400, fail);
    }

    // 判断当前用户是否登录
    const redisToken = await ctx.service.cache.get(`user_${user.id}`);
    if (!redisToken || redisToken !== token) {
      ctx.throw(400, 'token令牌不合法!');
    }

    // 获取当前账号状态
    user = await app.model.User.findByPk(user.id);
    if (!user || user.status === 0) {
      ctx.throw(400, '用户不存在或当前账号已被禁用!');
    }

    // 将user信息挂载在全局ctx中
    ctx.authUser = user;
    console.log('next', next)
    await next();
  }
}