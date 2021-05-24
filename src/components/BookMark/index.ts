/*
 * @Description:收藏夹组件的一些基础配置,数据,接口等
 * @Date: 2021-04-26 11:45:42
 * @LastEditTime: 2021-05-17 19:33:01
 * @FilePath: \warbler-homepage\src\components\BookMark\index.ts
 */

import { LabelsProps } from 'coms/LabelList/index';

// 标签列表
export type LabelListProps = LabelsProps[];

// 初始数据
export const initData: LabelListProps = [
  {
    title: '视频网站',
    marks: [
      {
        title: '优酷视频',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/175602/32/10753/6436/60a788aaEcd9d368c/c70edec8e418ef15.png',
        targetUrl: 'https://www.youku.com',
        explain: '',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/193408/32/4343/6479/60a78929E4303368d/c342786431ace070.png',
        title: '腾讯视频',
        explain: '',
        targetUrl: 'https://v.qq.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/174971/9/10559/3897/60a789e9E06a8ff80/1d76f1a9a1948bab.png',
        title: '爱奇艺视频',
        explain: '',
        targetUrl: 'https://www.iqiyi.com',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/178133/4/5313/5149/60a789e9E53ca6456/93962a3ad2207a1f.png',
        title: '芒果视频',
        explain: '',
        targetUrl: 'https://www.mgtv.com/',
      },
      {
        icon: 'https://www.zkdh.net/wp-content/uploads/2020/05/ic_launcher.png',
        title: '掌酷导航',
        explain: '专注影音娱乐的网址导航',
        targetUrl: 'https://www.zkdh.net/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/174642/31/11085/4236/60ab0e5eEae1f6f4e/4de8481661d812e3.png',
        title: '哔哩哔哩',
        explain: '',
        targetUrl: 'https://www.bilibili.com/',
      },
    ],
  },
  {
    title: '我的专属',
    marks: [
      {
        title: '码云',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/135621/34/18951/3724/60a78b3aEe875647e/20ff31a386daeae8.png',
        targetUrl: 'https://gitee.com',
        explain: '我的代码托管平台',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/171695/4/10749/6299/60a78ba0E7be55dbf/5f2272c9b6654a35.png',
        title: '腾讯云',
        explain: '我的云服务器',
        targetUrl: 'https://console.cloud.tencent.com/cvm/instance/index?rid=8',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/194522/22/4281/2344/60a78d0eEc8a3aaf7/2062640bcbe3f83f.png',
        title: '宝塔Linux面板',
        explain: '服务器可视化管理平台',
        targetUrl: 'http://81.70.96.113:8888/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/181659/27/5372/5371/60a78dc5Ee81d6485/77570c1c9c34ac6a.png',
        title: '新浪云储存',
        explain: '云储存空间,服务器上传图片的地方',
        targetUrl: 'https://scs.sinacloud.com/?c=console&ticket=45dbec41abc91544d26a797ca93aa9f6bdc35336',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/147594/25/19255/26398/60a78e7cE29e7e870/560fc29d186f51f8.png',
        title: '控制台',
        explain: '我博客的接口文档',
        targetUrl: 'http://www.docway.net/dashboard?personal',
      },
      {
        title: 'GitHub',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/179528/3/5637/3396/60ab1c19Ebb9f2301/0d21547c755c6b84.png',
        targetUrl: 'https://github.com/alanhzw',
        explain: '我的另一个代码托管平台',
      },
    ],
  },
  {
    title: '陆泽科技',
    marks: [
      {
        title: '超级会员小白熊',
        icon: 'https://img10.360buyimg.com/imgzone/jfs/t1/98277/9/10864/7403/5e216e63Ee42e535f/b44e5a0f811d9975.jpg',
        targetUrl: 'https://xbx-isv.isvjcloud.com/cjhyUserLogin',
        explain: '',
      },
      {
        icon: 'https://img10.360buyimg.com/imgzone/jfs/t1/98277/9/10864/7403/5e216e63Ee42e535f/b44e5a0f811d9975.jpg',
        title: '超级会员主线',
        explain: '',
        targetUrl: 'http://127.0.0.1:8080/cjhyUserlogin',
      },
      {
        icon: 'https://img10.360buyimg.com/imgzone/jfs/t1/98277/9/10864/7403/5e216e63Ee42e535f/b44e5a0f811d9975.jpg',
        title: '超级会员线上',
        explain: '',
        targetUrl: 'https://jdcjhy.dianpusoft.cn/cjhyUserLogin',
      },
      {
        icon: 'http://jdtools.dianpusoft.cn/resources/system/images/favicon.png',
        title: '京东后台管理系统',
        explain: '',
        targetUrl: 'http://jdtools.dianpusoft.cn/background/index',
      },
      {
        icon: 'https://lucidata.worktile.com/image/favicon/bright-purple.ico',
        title: 'Worktitle',
        explain: '',
        targetUrl: 'https://lucidata.worktile.com/mission/my/directed',
      },
      {
        icon: 'https://qiye.aliyun.com/static/0.1.8/images/favicon.ico',
        title: '阿里邮箱企业版',
        explain: '查看工资条~',
        targetUrl: 'https://qiye.aliyun.com/alimail',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/174997/12/10878/6003/60a791e6E1b24fabe/224d02c3957c6eb0.png',
        title: '禅道',
        explain: '看bug的',
        targetUrl: 'http://apidoc.dianpusoft.cn:30003/zentao/my-bug.html',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/172636/40/10713/4041/60a791e6E006be003/22088352554d7229.png',
        title: '图片空间',
        explain: '',
        targetUrl: 'https://imgzone.shop.jd.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/188039/1/4329/5175/60a791e6Ef6758adf/a56637e0a677be3f.png',
        title: '语雀',
        explain: '写文档的',
        targetUrl: 'https://lucidata.yuque.com/hxfrzn',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/194178/3/4176/5048/60a791e6Eab49d289/68193844da40ed02.png',
        title: '蓝湖',
        explain: '看设计图的',
        targetUrl: 'https://lanhuapp.com',
      },
    ],
  },
  {
    title: '官方文档',
    marks: [
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 官方中文文档',
        explain: '下一代前端开发与构建工具',
        targetUrl: 'https://cn.vitejs.dev/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/189111/30/4329/5533/60a796abE4e546730/6bab749d96a75599.png',
        title: 'Eslint官方文档',
        explain: '代码规范工具',
        targetUrl: 'https://cn.eslint.org/docs/rules/',
      },
      {
        icon: 'https://developer.mozilla.org/favicon-48x48.97046865.png',
        title: 'Web API 接口参考',
        explain: '',
        targetUrl: 'https://developer.mozilla.org/zh-CN/docs/Web/API',
      },
    ],
  },
  {
    title: '图片素材',
    marks: [
      {
        icon: 'http://zhongguose.com/img/favicon.ico',
        title: '中国色 － 中国传统颜色',
        explain: '提供各种中国的传统颜色的名称，CMYK值，RGB值，16进制表示。',
        targetUrl: 'http://zhongguose.com/',
      },
      {
        icon: 'https://www.pexels.com/favicon.ico',
        title: 'Pexels',
        explain: '免费素材图片',
        targetUrl: 'https://www.pexels.com/zh-cn/',
      },
      {
        icon: 'https://www.ssyer.com/favicon.ico',
        title: '沙沙野',
        explain: '让作品遇见全世界',
        targetUrl: 'https://www.ssyer.com/',
      },
      {
        icon: 'https://images.freeimages.com/static/images/favicon/favicon.ico',
        title: 'FreeImages',
        explain: '探索 300,000 多张免费素材和免版税图像 ',
        targetUrl: 'https://www.freeimages.com/cn',
      },
      {
        icon: 'https://jhk-weixin-xcx.oss-cn-hangzhou.aliyuncs.com/pimg/favicon.ico',
        title: '大作',
        explain: '找灵感，用大作',
        targetUrl: 'https://www.bigbigwork.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/180209/9/5358/3658/60a7997fE14b230b5/02c739eef4345e80.png',
        title: '图精灵',
        explain: '免费PNG图片下载_高清背景图片素材_自由设计',
        targetUrl: 'http://616pic.com/',
      },
      {
        icon: 'https://static.alphacoders.com/icons/wallpaper/favicon-32x32.png',
        title: 'Wallpaper Abyss',
        explain: '高清壁纸图片免费下载',
        targetUrl: 'https://wall.alphacoders.com/by_sub_category.php?id=320804&name=Arknights+Wallpapers&page=4',
      },
    ],
  },
  {
    title: '论坛贴吧',
    marks: [
      {
        title: '掘金',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/186536/13/4431/3960/60a78f0bE4ad7f0a3/171ce78b77cc7e6a.png',
        targetUrl: 'https://juejin.cn/user/4099422807393901',
        explain: '',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/183316/16/5315/4826/60a78f0bE6e6ab8c1/6ffac998c8ac18b3.png',
        title: 'CSDN',
        explain: '',
        targetUrl: 'https://blog.csdn.net/m0_48721669?spm=1010.2135.3001.5421',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/179072/12/5303/3635/60a78f0bE1f852fa0/ee5324fbf9a8a6ac.png',
        title: '知乎',
        explain: '',
        targetUrl: 'https://www.zhihu.com/people/yi-wei-liu-ying-49',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/175106/7/10878/4308/60a78f0bEe6f042bf/51a6d7e23be70abb.png',
        title: '简书',
        explain: '',
        targetUrl: 'https://www.jianshu.com/u/a3d8a1baaa3d',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/171853/3/11304/4673/60ab1010E35acf458/3a07a327d7610b7a.png',
        title: '吾爱论坛',
        explain: '',
        targetUrl: 'https://www.52pojie.cn/',
      },
    ],
  },
  {
    title: '前端工具库',
    marks: [
      {
        title: 'ElementUI',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/191893/12/4503/7360/60a7934dEa9552775/30e03e32f88cc113.png',
        targetUrl: 'https://element.eleme.cn/#/zh-CN',
        explain: 'element的vue2版本',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico',
        title: '阿里巴巴图标库',
        explain: '',
        targetUrl: 'https://www.iconfont.cn/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/96045/17/16850/4401/60a79456E59a86920/d89d928330c3a85f.png',
        title: 'Animate.css',
        explain: ' 一款强大的预设css3动画库',
        targetUrl: 'https://www.jq22.com/yanshi819',
      },
      {
        icon: 'https://animate.style/img/favicon.ico',
        title: 'Animate.css',
        explain: '另一个强大的CSS动画库',
        targetUrl: 'https://animate.style/',
      },
      {
        icon: 'https://file.iviewui.com/file/iview-design-favicon.ico',
        title: 'IView',
        explain: '',
        targetUrl: 'http://v1.iviewui.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/175216/37/10876/2468/60a79527Ebace3478/3f4a264b33e4f7ea.png',
        title: 'Lodash',
        explain: '',
        targetUrl: 'https://www.lodashjs.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/188984/22/4364/4397/60a7934dE834d3269/4895a6d4ae791306.png',
        title: 'Vant',
        explain: '轻量、可靠的移动端组件库',
        targetUrl: 'https://vant-contrib.gitee.io/vant/#/zh-CN/',
      },
      {
        icon: 'https://element-plus.gitee.io/favicon.ico',
        title: 'element-plus',
        explain: 'element的兼容vue3版本',
        targetUrl: 'https://element-plus.gitee.io/#/zh-CN/component/installation',
      },
      {
        icon: 'https://element3-ui.com/img/element-logo.0e11c581.svg',
        title: 'element3',
        explain: '开课吧发行的element的vue3版本',
        targetUrl: 'https://element3-ui.com/#/component/installation',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/171933/4/10812/2884/60a7934dE25cb73af/ca5e0d68920e1004.png',
        title: 'Bootstrap ',
        explain: '全球最受欢迎的前端框架，用于构建响应式、移动设备优先的网站',
        targetUrl: 'https://v5.bootcss.com/docs/getting-started/introduction/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/184356/16/5364/4489/60a797b4E8c646a3f/b770a1bea5da638e.png',
        title: 'VuePress',
        explain: 'Vue 驱动的静态网站生成器',
        targetUrl: 'https://vuepress.vuejs.org/zh/guide/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/190511/38/4881/3841/60ab1371E0d8aa5a9/157ba2054d181d27.png',
        title: 'vue-qr',
        explain: '一款可以生成带logo和背景图片二维码的vue前端插件',
        targetUrl: 'http://www.itxst.com/qrcodejs/fmmvyaer.html',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/174486/15/11195/3552/60ab1c94E386d8bbc/3be5b741e0b72889.png',
        title: 'jQuery之家',
        explain: '虽然jQuery已经成为过去式,但是这个网址可以借鉴一些比较好的创意',
        targetUrl: 'http://www.htmleaf.com/',
      },
    ],
  },
  {
    title: '我的加油站',
    marks: [
      {
        icon: 'https://img.kaikeba.com/kkb_portal_icon.ico',
        title: '开课吧',
        explain: '',
        targetUrl: 'https://learn.kaikeba.com/home',
      },
      {
        icon: 'https://www.imooc.com/static/img/common/touch-icon-ipad.png',
        title: '慕课网',
        explain: '',
        targetUrl: 'https://www.imooc.com/u/index/allcourses',
      },
      {
        icon: 'http://c.biancheng.net/favicon.ico?v=1.6.53',
        title: 'JavaScript学习笔记',
        explain: '很多JS实用技巧',
        targetUrl: 'http://c.biancheng.net/skill/js/list_309_15.html',
      },
      {
        title: 'CSS面试题',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/188540/5/4658/1899/60ab1acfEdf949919/313ea188bd79bac4.png',
        targetUrl: 'https://mp.weixin.qq.com/s/Xp47k--mJgAGM2g14N0TRg',
        explain: '104道 CSS 面试题，助你查漏补缺',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/187858/26/4725/2851/60ab1acfEf8178f67/23693af69448a767.png',
        title: 'JS面试题',
        explain: '75 道 JavaScript 面试题， 2.5 万字刷个够',
        targetUrl: 'https://mp.weixin.qq.com/s/9HiaAAWuikXllCOcAPOn-w',
      },
    ],
  },
  {
    title: '最强黑科技',
    marks: [
      {
        icon: 'https://glassmorphism.com/favicon.ico',
        title: 'Glassmorphism CSS Generator',
        explain: '在线玻璃拟态生成器',
        targetUrl: 'https://glassmorphism.com/',
      },
      {
        icon: 'https://neumorphism.io/favicon.ico',
        title: 'Neumorphism',
        explain: '新拟态生成器',
        targetUrl: 'https://neumorphism.io/',
      },
      {
        icon: 'https://www.html.cn/tool/css-clip-path/pics/favicon.png',
        title: 'Clippy',
        explain: 'CSS clip-path 生成器',
        targetUrl: 'https://www.html.cn/tool/css-clip-path/',
      },
      {
        icon: 'http://cv.ftqq.com/favicon.png',
        title: ' 冷熊简历',
        explain: '快捷生产简历的模板网站',
        targetUrl: 'http://cv.ftqq.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/34273/14/16362/1302/60ab1522E2419f546/841ed9e8263a7d7a.png',
        title: 'Grid Garden',
        explain: '一个用来学CSS grid的游戏',
        targetUrl: 'https://cssgridgarden.com/#zh-cn',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/179376/14/5584/2051/60ab1522E26a4adca/939595c0d7bcbb8b.png',
        title: 'Flexbox Froggy',
        explain: '一个用来学CSS flexbox的游戏',
        targetUrl: 'https://flexboxfroggy.com/#zh-cn',
      },
    ],
  },
  {
    title: '导航网站',
    marks: [
      {
        title: '龙猫导航',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/182328/31/5660/6698/60ab0cc3Efe8dc7e7/9fc5015bc57b45ac.png',
        targetUrl: 'https://ailongmiao.com/web/',
        explain: '前端导航',
      },
      {
        icon: 'https://www.zkdh.net/wp-content/uploads/2020/05/ic_launcher.png',
        title: '掌酷导航',
        explain: '专注影音娱乐的网址导航',
        targetUrl: 'https://www.zkdh.net/',
      },
      {
        title: '前端导航',
        icon: 'https://www.kwgg2020.com/images/favicon.ico',
        targetUrl: 'https://www.kwgg2020.com/',
        explain: 'JavaScript、CSS、前端面试、技术社区、博客团队、GitHub 统计、构建、部署、静态站点搭建工具、调试抓包、开发工具、前端大会、图标',
      },
    ],
  },
  {
    title: '常用工具',
    marks: [
      {
        title: 'TinyPNG',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/193007/32/4606/5674/60ab0daeE4ee37001/85c419a05b35de36.png',
        targetUrl: 'https://tinypng.com/',
        explain: '在线图片压缩',
      },
      {
        icon: 'https://coolbackgrounds.io/images/favicon-fe5a0ff5.png',
        title: 'Cool Backgrounds',
        explain: '个性化壁纸生成网站',
        targetUrl: 'https://coolbackgrounds.io/',
      },
    ],
  },
  {
    title: '优秀网站',
    marks: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/Lime_Logo.png',
        title: '青柠起始页',
        explain: '',
        targetUrl: 'https://limestart.cn/',
      },
      {
        title: 'MikuTools',
        icon: 'https://tools.miku.ac/favicon.ico',
        targetUrl: 'https://tools.miku.ac/',
        explain: ' 一个轻量的工具集合',
      },
      {
        icon: 'https://img.cdn.heanny.cn/logo.gif',
        title: '首页 - Heanny Blog | www.heanny.cn | 我不是你的肖奈 | 一朵灼灼华',
        explain: '优秀的个人博客',
        targetUrl: 'https://www.heanny.cn/',
      },
      {
        icon: 'http://lpyexplore.gitee.io/nav-infos/favicon.ico',
        title: 'Nav-url',
        explain: '另一个优秀的网址收藏工具',
        targetUrl: 'http://lpyexplore.gitee.io/nav-infos/',
      },
    ],
  },
];

// 数据类型
export interface BookmarkState {
  warblerData: LabelListProps;
  editMode: boolean;
  motto: string;
}

const mottoList = [
  '凡所有相，皆为虚妄。若见诸相非相，即见如来',
  '不取于相,如如不动',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
];

export const getMotto = () => {
  const random = Math.floor(Math.random() * mottoList.length);
  return mottoList[random];
};
