/*
 * @Description:社交媒体图标组件
 * @Date: 2021-05-07 00:06:35
 * @LastEditTime: 2021-05-19 11:07:37
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
    targetUrl: 'https://juejin.cn/user/4099422807393901',
  },
  {
    icon: ' &#xe640;',
    title: '个人博客',
    targetUrl: 'https://www.duwanyu.com',
  },
];
