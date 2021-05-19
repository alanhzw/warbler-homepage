/*
 * @Description:标签组件的一些基础配置,数据,接口等
 * @Date: 2021-04-26 11:42:23
 * @LastEditTime: 2021-05-12 18:30:21
 * @FilePath: \warbler-homepage\src\components\LabelList\index.ts
 */

import { MarkProps } from 'coms/MarkList/index';
import { ComputedRef } from 'vue';
import { RulesProp } from 'base/Input/index';

// 单个标签
export interface LabelsProps {
  title: string;
  marks: MarkProps[];
}

// 操作标签的类型
export type HandleLabelType = 'add' | 'update';

// 标签相关操作数据
export interface LabelState {
  handleType: HandleLabelType;
  currentClickLabel: number;
  currentHoverLabel: number;
  dialogTitle: ComputedRef;
}

// 弹窗相关操作数据
export interface DialogState {
  isShowLabelDialog: boolean;
  labelTitle: string;
  rules: RulesProp;
}
