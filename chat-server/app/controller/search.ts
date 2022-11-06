import { Controller } from 'egg';

export default class SearchController extends Controller {
  // 搜索用户
  public async user() {
    const {ctx, app} = this;
    let {keyword} = ctx.request.body;
    const data = await app.model.User.findOne({
      where: {
        username: keyword
      },
      attributes: {
        exclude: ['password']
      }
    });
    return ctx.apiSuccess(data);
  }
}