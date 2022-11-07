// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApply from '../../../app/controller/apply';
import ExportHome from '../../../app/controller/home';
import ExportSearch from '../../../app/controller/search';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    apply: ExportApply;
    home: ExportHome;
    search: ExportSearch;
    user: ExportUser;
  }
}
