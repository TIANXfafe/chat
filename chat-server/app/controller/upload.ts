import { Controller } from 'egg';
import * as path from 'path';

export default class UploadController extends Controller {
  public async upload() {
    const { ctx } = this;

    if (!ctx.request.files) {
      ctx.apiFail('请先选择上传文件!');
    }
    const file = ctx.request.files[0];
    const name = 'avatar/' + ctx.getID(10) + path.extname(file.filename);
    let result;
    try {
      result = await ctx.oss.put(name, file.filepath);
    } catch (err) {
      ctx.logger.warn('err', err);
    }
    if (result) {
      return ctx.apiSuccess({ url: result.url }, '上传成功!');
    }
    ctx.apiFail('上传失败!');
  }
}
