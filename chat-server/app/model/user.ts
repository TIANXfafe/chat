'use strict';
import crypto from 'crypto';

module.exports = app => {
  const { INTEGER, STRING, DATE, ENUM } = app.Sequelize;
  return app.model.define('user', {
    id: {
      type: INTEGER(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
      comment: '用户名称',
      unique: true,
    },
    nickname: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
      comment: '昵称',
    },
    email: {
      type: STRING(160),
      comment: '用户邮箱',
      unique: true,
    },
    password: {
      type: STRING(200),
      allowNull: false,
      defaultValue: '',
      comment: '密码',
      set(val) {
        const hmac = crypto
          .createHmac('sha256', app.config.crypto.secret)
          .update(val)
          .digest('hex');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.setDataValue('password', hmac);
      },
    },
    avatar: {
      type: STRING(200),
      allowNull: true,
      defaultValue: '',
      comment: '头像',
    },
    phone: {
      type: STRING(20),
      comment: '用户手机',
      unique: true,
    },
    sex: {
      type: ENUM,
      values: [ '男', '女', '未知' ],
      allowNull: true,
      defaultValue: '未知',
      comment: '用户性别',
    },
    status: {
      type: INTEGER(1),
      allowNull: false,
      defaultValue: 1,
      comment: '账号状态 0 禁用 1 正常',
    },
    sign: {
      type: STRING(200),
      allowNull: false,
      defaultValue: '',
      comment: '个性签名',
    },
    area: {
      type: STRING(200),
      allowNull: true,
      defaultValue: '',
      comment: '地区',
    },
    created_at: DATE,
    updated_at: DATE,
  });
};
