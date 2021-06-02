/*
 * @Description:书签组件的一些基础配置,数据,接口等
 * @Date: 2021-04-26 11:41:18
 * @LastEditTime: 2021-06-02 14:42:10
 * @FilePath: \WarblerHomepage\src\components\MarkList\index.ts
 */
import { RulesProp } from 'base/Input/index';

// 单个书签
export interface MarkProps {
  icon?: string;
  title: string;
  targetUrl: string;
  explain?: string;
}

// 书签列表
export type MarkListProps = MarkProps[];

// 操作书签的类型
export type HandleMarkType = 'add' | 'update';

// 书签相关操作数据
export interface MarkState {
  handleType: HandleMarkType;
  defaultImg: string;
  currentMark: number;
}

// 弹窗相关操作数据
export interface DialogState {
  title: string;
  icon: string;
  targetUrl: string;
  explain: string;
}
// 弹窗表单相关操作数据
export interface DialogFormState {
  targetUrlRules: RulesProp;
  titleRules: RulesProp;
  iconRules: RulesProp;
  isShowAddMarkDialog: boolean;
  loading1: boolean;
  loading2: boolean;
}
