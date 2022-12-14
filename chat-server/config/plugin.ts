import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 数据库
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 参数验证
  valparams: {
    enable: true,
    package: 'egg-valparams',
  },
  // jwt
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // redis
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  // websocket
  websocket: {
    enable: true,
    package: 'egg-websocket-plugin',
  },
  // oss
  oss: {
    enable: true,
    package: 'egg-oss',
  },
};

export default plugin;
