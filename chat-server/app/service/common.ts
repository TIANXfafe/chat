import { Service } from 'egg';

export default class CommonService extends Service {

  /**
   * @param arr 树形数据
   * @param child 树形数据子数据的属性名,常用'children'
   * @param attrArr 需要提取的公共属性数组(默认是除了child的全部属性)
   * @return
   */
  public async flatArray(arr: any, child: string, attrArr: any) {
    let attrList: any = [];
    if (!Array.isArray(arr) && !arr.length) return [];
    if (!Array.isArray(attrArr) || Array.isArray(attrArr) && !attrArr.length) {
      attrList = Object.keys(arr[0]);
      attrList.splice(attrList.indexOf(child), 1);
    } else {
      attrList = attrArr;
    }
    const list = [];
    const getObj = arr => {
      arr.forEach(function(row) {
        const obj: any = {};
        attrList.forEach(item => {
          obj[item] = row[item];
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        list.push(obj);
        if (row[child]) {
          getObj(row[child]);
        }
      });
      return list;
    };
    return getObj(arr);
  }
}
