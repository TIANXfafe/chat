import { Controller } from 'egg';

export default class HomeController extends Controller {
  // 举报
  public async save() {
    const { ctx, app } = this;
    const currentUserId = ctx.authUser.id;
    const {
      reported_id,
      reported_type,
      content,
      category
    } = ctx.request.body;
    // 参数验证

    // 不能举报自己
    if (reported_type === 'user' && reported_id === currentUserId) {
      ctx.throw(400, '不能举报自己!');
    }
    // 被举报人是否存在
    const user = await app.model.User.findOne({
      where: {
        id: reported_id,
        status: 1
      }
    })
    if (!user) {
      ctx.throw(400, '被举报人不存在!');
    }
    // 之前是否举报过还未处理的
    const reportInfo = await app.model.Report.findOne({
      where: {
        reported_id,
        reported_type,
        status: 'pending'
      }
    })
    if (reportInfo) {
      ctx.throw(400, '请勿反复提交!')
    }
    // 举报内容
    const result = await app.model.Report.create({
      user_id: currentUserId,
      reported_id,
      reported_type,
      content,
      category
    })
    ctx.apiSuccess(result);
  }
}
