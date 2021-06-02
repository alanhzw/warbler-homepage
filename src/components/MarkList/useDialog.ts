/*
 * @Description:书签列表组件中跟Dialog相关操作
 * @Date: 2021-04-26 16:49:08
 * @LastEditTime: 2021-06-02 14:40:25
 * @FilePath: \WarblerHomepage\src\components\MarkList\useDialog.ts
 */
import { reactive } from 'vue';
import { MarkProps, DialogState, DialogFormState } from 'coms/MarkList/index';
import { RulesProp } from 'base/Input/index';
import request from 'utils/request';
import createMessage from 'base/Message/index';

// 弹窗书签验证规则
const targetUrlRules: RulesProp = [
  {
    type: 'required',
    message: '请输入目标网址 !',
  },
];
const titleRules: RulesProp = [
  {
    type: 'required',
    message: '请输入书签名称 !',
  },
];
const iconRules: RulesProp = [];

const useDialog = () => {
  const dialogFormState = reactive<DialogState>({
    title: '', // 弹窗书签名称
    icon: '', // 弹窗图标URL
    targetUrl: '', // 目标网址
    explain: '', // 网址简介
  });
  const dialogState = reactive<DialogFormState>({
    // 弹窗书签验证规则
    targetUrlRules: targetUrlRules,
    titleRules: titleRules,
    iconRules: iconRules,
    // 定义是否显示添加书签弹窗
    isShowAddMarkDialog: false,
    // 用来控制loading显示隐藏的属性
    loading1: false,
    loading2: false,
  });

  // 打开添加书签弹窗
  const showAddMarkDialog = (item?: MarkProps) => {
    if (item) {
      dialogFormState.targetUrl = item.targetUrl;
      dialogFormState.explain = item.explain || '';
      dialogFormState.icon = item.icon || '';
      dialogFormState.title = item.title;
    }
    dialogState.isShowAddMarkDialog = true;
  };
  // 关闭添加书签弹窗
  const closeAddMarkDialog = () => {
    dialogState.isShowAddMarkDialog = false;
    resetForm();
  };
  // 重置表单 暂时没有表单组件 以后封装了再改
  const resetForm = () => {
    dialogFormState.targetUrl = '';
    dialogFormState.title = '';
    dialogFormState.icon = '';
    dialogFormState.explain = '';
  };

  // 自动获取图标和地址
  const autoGetInfo = (type: string) => {
    // 判断是否输入目标网址
    if (!dialogFormState.targetUrl) {
      createMessage({ type: 'error', message: '请输入目标网址 !' });
      return;
    }
    if (type === 'title') {
      dialogState.loading1 = true;
    }
    if (type === 'icon') {
      dialogState.loading2 = true;
    }
    request({ url: 'https://www.duwanyu.com/spider/getIconAndTitle', method: 'post', data: { targetUrl: dialogFormState.targetUrl } })
      .then((res) => {
        if (type === 'title') {
          dialogFormState.title = res.data.title;
          dialogState.loading1 = false;
        }
        if (type === 'icon') {
          dialogFormState.icon = res.data.icon;
          dialogState.loading2 = false;
        }
        createMessage({ type: 'success', message: '自动获取成功 !' });
      })
      .catch(() => {
        createMessage({ type: 'error', message: '自动获取失败,请手动输入 !' });
      });
  };
  return {
    showAddMarkDialog,
    closeAddMarkDialog,
    dialogState,
    autoGetInfo,
    dialogFormState,
  };
};
export default useDialog;
