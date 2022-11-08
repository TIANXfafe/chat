// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApply from '../../../app/controller/apply';
import ExportFriend from '../../../app/controller/friend';
import ExportHome from '../../../app/controller/home';
import ExportReport from '../../../app/controller/report';
import ExportSearch from '../../../app/controller/search';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    apply: ExportApply;
    friend: ExportFriend;
    home: ExportHome;
    report: ExportReport;
    search: ExportSearch;
    user: ExportUser;
  }
}
