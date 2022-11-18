import { Controller } from 'egg';
import * as path from 'path';
import cityInfo from '../data/city.json';

export default class UploadController extends Controller {
  // 上传头像
  public async uploadAvatar() {
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
  // 上传静态资源
  public async uploadCommon() {
    const { ctx } = this;
    if (!ctx.request.files) {
      ctx.apiFail('请先选择上传文件!');
    }
    const file = ctx.request.files[0];
    const name = 'common/' + ctx.getID(10) + path.extname(file.filename);
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
  // 省市区数据（树形结构）
  public async cityList() {
    const { ctx } = this;
    ctx.apiSuccess(cityInfo);
  }
  // 省市区数据（扁平化）
  public async flatCityList() {
    const { ctx } = this;
    const flatCity = await ctx.service.common.flatArray(cityInfo, 'children', [ 'label', 'value', 'level' ]);
    ctx.apiSuccess(flatCity);
  }
  // 根据id查询省市区name
  public async fetchCityName() {
    const { ctx } = this;
    const { city } = ctx.request.body;
    const flatCity = await ctx.service.common.flatArray(cityInfo, 'children', [ 'label', 'value', 'level' ]);
    if (Array.isArray(city)) {
      if (city.length) {
        const cityArr = [];
        city.forEach(item => {
          const cityInfo = flatCity.find((it: {value: string}) => it.value === item);
          if (cityInfo) {
            cityArr.push(cityInfo);
          } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            cityArr.push({});
          }
        });
        ctx.apiSuccess(cityArr);
      } else {
        ctx.apiFail('参数不能为空!');
      }
    } else if (typeof city === 'string') {
      if (city) {
        const cityInfo = flatCity.find((item: {value: string}) => item.value === city);
        if (cityInfo) {
          ctx.apiSuccess(cityInfo);
        } else {
          ctx.apiFail('未查询到该省市区!');
        }
      } else {
        ctx.apiFail('参数不能为空!');
      }
    } else {
      ctx.apiFail('参数错误!');
      return;
    }
  }
}
