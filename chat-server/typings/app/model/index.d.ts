// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApply from '../../../app/model/apply';
import ExportFriend from '../../../app/model/friend';
import ExportFriendTag from '../../../app/model/friend_tag';
import ExportReport from '../../../app/model/report';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Apply: ReturnType<typeof ExportApply>;
    Friend: ReturnType<typeof ExportFriend>;
    FriendTag: ReturnType<typeof ExportFriendTag>;
    Report: ReturnType<typeof ExportReport>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
  }
}
