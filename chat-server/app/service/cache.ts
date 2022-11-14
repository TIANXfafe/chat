import { Service } from 'egg';

export default class CacheService extends Service {
  /**
   * 获取列表
   * @param key 键
   * @param isChildObject 元素是否为对象
   * @return {array} 返回数组
   */
  public async getList(key: string, isChildObject = false) {
    const { redis } = this.app;
    const data = await redis.lrange(key, 0, -1);
    if (isChildObject) {
      data.map(item => {
        return JSON.parse(item);
      });
    }
    return data;
  }

  /**
   * 设置列表
   * @param key 键
   * @param value 值
   * @param type 类型：push和unshift
   * @param expir 过期时间 单位秒
   * @return {Number} 返回索引
   */
  public async setList(
    key: string,
    value: object | string,
    type: 'push' | 'unshift' = 'push',
    expir = 0,
  ) {
    const { redis } = this.app;
    if (expir > 0) {
      await redis.expire(key, expir);
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    if (type === 'push') {
      return await redis.rpush(key, value);
    }
    return await redis.lpush(key, value);
  }

  /**
   * 设置redis缓存
   * @param key 键
   * @param value 值
   * @param expir 过期时间 单位秒
   * @return {String} 返回成功字符串OK
   */
  async set(key: string, value: string, expir = 0) {
    const { redis } = this.app;
    if (expir === 0) {
      return await redis.set(key, JSON.stringify(value));
    }
    return await redis.set(key, JSON.stringify(value), 'EX', expir);

  }

  /**
   * 获取redis缓存
   * @param key 键
   * @return {String | Array | Object} 返回获取的数据
   */
  async get(key: string) {
    const { redis } = this.app;
    const result = await redis.get(key);
    return result && JSON.parse(result);
  }

  /**
   * redis 自增
   * @param key 键
   * @param number 自增的值
   * @return {Number} 返回递增值
   */
  async incr(key: string, number = 1) {
    const { redis } = this.app;
    if (number === 1) {
      return await redis.incr(key);
    }
    return await redis.incrby(key, number);

  }

  /**
   * 查询长度
   * @param key 键
   * @return {Number} 返回数据长度
   */
  async strlen(key: string) {
    const { redis } = this.app;
    return await redis.strlen(key);
  }

  /**
   * 删除指定key
   * @param key 键
   */
  async remove(key: string) {
    const { redis } = this.app;
    return await redis.del(key);
  }

  /**
   * 清空缓存
   */
  async clear() {
    return await this.app.redis.flushall();
  }
}
