/*
 * @Description:标签列表组件中跟Dialog相关操作
 * @Date: 2021-04-25 13:08:49
 * @LastEditTime: 2021-05-12 19:15:52
 * @FilePath: \warbler-homepage\src\components\LabelList\useDialog.ts
 */
import { reactive } from 'vue';
import { RulesProp } from 'base/Input/index';
import { DialogState } from 'coms/LabelList/index';

// 标签标题验证规则
const rules: RulesProp = [
  {
    type: 'maxlength',
    message: '标签名称最多10个字符 !',
    maxlength: 10,
  },
  {
    type: 'required',
    message: '请输入标签名称 !',
  },
];

const useDialog = () => {
  const dialogState = reactive<DialogState>({
    // 定义是否显示添加标签弹窗
    isShowLabelDialog: false,
    // 定义输入框绑定值(标签名称)
    labelTitle: '',
    // 标签标题验证规则
    rules: rules,
  });

  // 打开添加标签弹窗
  const showLabelDialog = (value?: string) => {
    dialogState.isShowLabelDialog = true;
    if (value) {
      dialogState.labelTitle = value;
    }
  };

  // 关闭添加标签弹窗
  const closeLabelDialog = () => {
    dialogState.isShowLabelDialog = false;
    dialogState.labelTitle = '';
  };

  return {
    dialogState,
    showLabelDialog,
    closeLabelDialog,
  };
};
export default useDialog;
