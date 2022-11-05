module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (error: any) {
      // 所有异常都在app上触发一个error事件，框架会记录一条错误日志
      ctx.app.emit('error', error, ctx);

      ctx.status = error?.status || 500;
      ctx.body = {
        msg: 'fail',
        data: error.message
      }
    }
  };
};