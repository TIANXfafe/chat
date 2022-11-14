module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        ctx.body = {
          msg: 'fail',
          data: '404 错误',
        };
      }
    } catch (err: any) {
      // 所有异常都在app上触发一个error事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);

      const status = err?.status || 500;
      // const error = status === 500 && app.config.env === 'prod'
      //   ? 'InterNal Server Error'
      //   : err.message
      const error = err.message;
      // 从error对象上读出各个属性，设置到响应中
      ctx.body = {
        msg: 'fail',
        data: error,
      };

      if (status === 422) {
        ctx.body = {
          msg: 'fail',
          data: err.errors,
        };
      }
      ctx.status = status;
    }
  };
};
