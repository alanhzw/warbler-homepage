/*
 * @Description:定制主题组件
 * @Date: 2021-06-03 16:42:43
 * @LastEditTime: 2021-06-08 10:30:31
 * @FilePath: \WarblerHomepage\src\components\Theme\index.ts
 */

export interface ThemeItemType {
  title: string;
  content: string;
  attribute: string;
}

export type ThemeType = ThemeItemType[];

export interface ThemeState {
  isShowThemeDialog: boolean;
  theme: ThemeType;
}
export const defaultTheme: ThemeType = [
  { attribute: '--markExplainColor', title: '书签介绍的文字颜色', content: '#2f3e4c' },
  { attribute: '--markTitleColor', title: '书签标题的颜色', content: '#2f3e4c' },
  { attribute: '--markHoverColor', title: '书签鼠标划过的背景颜色', content: 'rgba(36, 138, 112, 0.3)' },
  { attribute: '--labelTitleColor', title: '标签文字的颜色', content: '#3f1661' },
  { attribute: '--labelHoverColor', title: '标签鼠标划过的颜色', content: 'rgba(85, 43, 184, 0.4)' },
  { attribute: '--labelClickColor', title: '标题点击后的颜色', content: 'rgba(85, 43, 184, 0.6)' },
  { attribute: '--searchPlaceholderColor', title: '预输入文本颜色', content: '#585c89' },
  { attribute: '--iconColor', title: '图标颜色', content: '#3f1661' },
  { attribute: '--dialogTextColor', title: '弹窗文字颜色', content: '#2f3e4c' },
  { attribute: '--dialogPlaceholderColor', title: '弹窗预输入文字颜色', content: '#2f3e4c' },
];
