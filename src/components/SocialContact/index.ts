/*
 * @Description:社交媒体图标组件
 * @Date: 2021-05-07 00:06:35
 * @LastEditTime: 2021-05-19 18:46:22
 * @FilePath: \WarblerHomepage\src\components\SocialContact\index.ts
 */
export interface SocialContactProps {
  icon: string;
  title: string;
  targetUrl: string;
}

export type SocialContactList = SocialContactProps[];

export const initData: SocialContactList = [
  {
    icon: '&#xe61a;',
    title: 'github',
    targetUrl: 'https://github.com/alanhzw/WarblerHomepage',
  },
  {
    icon: '&#xe60b;',
    title: 'gitee',
    targetUrl: 'https://gitee.com/hzw_0174/WarblerHomepage',
  },
  {
    icon: '&#xe603;',
    title: '掘金',
    targetUrl: 'https://juejin.cn/post/6963945204965441550',
  },
  {
    icon: ' &#xe640;',
    title: '个人博客',
    targetUrl: 'https://www.duwanyu.com',
  },
];
