import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667632871375_9889';

  // 中间件
  config.middleware = [ 'errorHandler', 'auth' ];

  config.auth = {
    ignore: [ '/register', '/login', '/upload' ],
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 关闭csrf开启跨域
  config.security = {
    // 关闭csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: [ 'http://localhost:3000' ],
  };
  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH',
  };
  // 数据库
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    port: 3306,
    database: 'chatserver',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳
      // paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      // deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: true,
    },
  };
  // 参数验证
  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  };
  // 密码加密
  config.crypto = {
    secret: 'j120frjwh0hj*(@#jdwiah21',
  };
  // jwt鉴权
  config.jwt = {
    secret: 'j120frjwh0hj*(@#jdwiah21',
  };
  // redis存储
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };
  config.multipart = {
    mode: 'file',
  };
  // oss
  config.oss = {
    client: {
      accessKeyId: 'xxx',
      accessKeySecret: 'xxx',
      bucket: 'xxx',
      endpoint: 'xxx',
      timeout: '120s',
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
