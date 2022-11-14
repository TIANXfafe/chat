module.exports = {
  // api返回成功
  apiSuccess(data = '', msg = 'ok', code = 200) {
    this.status = code;
    this.body = { msg, data };
  },
  // api返回失败
  apiFail(data = '', msg = 'fail', code = 400) {
    this.status = code;
    this.body = { msg, data };
  },
  // 生成token
  getToken(value) {
    return this.app.jwt.sign(value, this.app.config.jwt.secret);
  },
  // 验证token
  checkToken(token) {
    return this.app.jwt.verify(token, this.app.config.jwt.secret);
  },
};
