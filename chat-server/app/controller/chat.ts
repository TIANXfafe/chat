import { Controller } from 'egg';

export default class ChatController extends Controller {
  public async connect() {
    const { ctx, app } = this;
    if (!ctx.websocket) {
      ctx.throw(400, '非法访问!');
    }
    // 监听接收消息和关闭socket
    ctx.websocket && ctx.websocket
      .on('message', msg => {
        console.log('接收消息', msg);
      })
      .on('close', (code, reason) => {
        console.log('用户下线', code, reason);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const user_id = ctx.websocket ? ctx.websocket?.user_id : '';
        if ((app.ws as any).user && (app.ws as any).user[user_id]) {
          delete (app.ws as any).user[user_id];
        }
      });
    ctx.apiSuccess('hh');
  }
}
