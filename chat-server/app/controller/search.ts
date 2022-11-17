import { Controller } from 'egg';

export default class SearchController extends Controller {
  // 搜索用户
  public async user() {
    const { ctx, app } = this;
    const { keyword } = ctx.request.body;
    console.log('keyword', keyword);
    const data = await app.model.User.findOne({
      where: {
        username: keyword,
      },
      attributes: {
        exclude: [ 'password' ],
      },
    });
    return ctx.apiSuccess(data);
  }
}
