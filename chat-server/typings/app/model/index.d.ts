// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApply from '../../../app/model/apply';
import ExportFriend from '../../../app/model/friend';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Apply: ReturnType<typeof ExportApply>;
    Friend: ReturnType<typeof ExportFriend>;
    User: ReturnType<typeof ExportUser>;
  }
}
