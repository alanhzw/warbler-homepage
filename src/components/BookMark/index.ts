/*
 * @Description:收藏夹组件的一些基础配置,数据,接口等
 * @Date: 2021-04-26 11:45:42
 * @LastEditTime: 2021-08-17 12:14:36
 * @FilePath: \WarblerHomepage\src\components\BookMark\index.ts
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
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/193408/32/4343/6479/60a78929E4303368d/c342786431ace070.png',
        title: '腾讯视频',
        explain: '',
        targetUrl: 'https://v.qq.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/174642/31/11085/4236/60ab0e5eEae1f6f4e/4de8481661d812e3.png',
        title: '哔哩哔哩',
        explain: '',
        targetUrl: 'https://www.bilibili.com/',
      },
      {
        icon: 'https://www.zkdh.net/wp-content/uploads/2020/05/ic_launcher.png',
        title: '掌酷导航',
        explain: '专注影音娱乐的网址导航',
        targetUrl: 'https://www.zkdh.net/',
      },
      {
        icon: 'https://game.gtimg.cn/images/lol/v3/logo-public.png',
        title: '英雄联盟赛事官网',
        explain: '',
        targetUrl: 'https://lpl.qq.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/196801/11/5211/8955/60b0bc77Ed6fa9536/c2bc9d6ec1217ee0.png',
        title: '斗鱼直播',
        explain: '',
        targetUrl: 'https://www.douyu.com/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/187918/2/5444/8610/60b0bc77Edf1444c4/f714caae245d0d79.png',
        title: '虎牙直播',
        explain: '',
        targetUrl: 'https://www.huya.com/',
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
        title: '宝塔Linux面板',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/194522/22/4281/2344/60a78d0eEc8a3aaf7/2062640bcbe3f83f.png',
        targetUrl: 'http://81.70.96.113:8888/71c04f96',
        explain: '服务器可视化管理平台',
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
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/171933/4/10812/2884/60a7934dE25cb73af/ca5e0d68920e1004.png',
        title: '我的博客',
        explain: '韩志伟的个人博客',
        targetUrl: 'https://www.duwanyu.com',
      },
    ],
  },
  {
    title: '官方文档',
    marks: [
      {
        title: 'Vite | 官方中文文档',
        icon: 'https://cn.vitejs.dev/logo.svg',
        targetUrl: 'https://cn.vitejs.dev/',
        explain: '下一代前端开发与构建工具',
      },
      {
        title: 'Eslint | 官方文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/189111/30/4329/5533/60a796abE4e546730/6bab749d96a75599.png',
        targetUrl: 'https://cn.eslint.org/docs/rules/',
        explain: '代码规范工具',
      },
      {
        icon: 'https://developer.mozilla.org/favicon-48x48.97046865.png',
        title: 'Web API 接口参考',
        explain: '',
        targetUrl: 'https://developer.mozilla.org/zh-CN/docs/Web/API',
      },
      {
        title: 'Socket.io | 中文文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/176441/31/11389/4194/60ac6214E87c5c41a/1aced7cbed52605a.png',
        targetUrl: 'https://www.wenjiangs.com/doc/gyr6mn3r',
        explain: '',
      },
      {
        icon: 'https://ts.xcatliu.com/favicon.png',
        title: 'TypeScript 入门教程',
        explain: '',
        targetUrl: 'https://ts.xcatliu.com/',
      },
      {
        icon: 'https://ts.xcatliu.com/favicon.png',
        title: '深入理解 TypeScript ',
        explain: '',
        targetUrl: 'https://jkchao.github.io/typescript-book-chinese/',
      },
      {
        title: 'Vue.js | 官方文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/184356/16/5364/4489/60a797b4E8c646a3f/b770a1bea5da638e.png',
        targetUrl: 'https://cn.vuejs.org/',
        explain: 'vue2的版本',
      },
      {
        title: 'Vue.js | 官方文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/184356/16/5364/4489/60a797b4E8c646a3f/b770a1bea5da638e.png',
        targetUrl: 'https://www.vue3js.cn/docs/zh/',
        explain: 'vue3的版本',
      },
      {
        title: 'Node.js | 中文文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/172984/36/11153/3483/60ac6652E7a40ded2/0d519a0aec65118a.png',
        targetUrl: 'http://nodejs.cn/api/',
        explain: '',
      },
      {
        title: ' Express | 中文文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/178510/3/5735/6198/60ac6652E9bb74b8c/82b9151067ae35f2.png',
        targetUrl: 'https://www.expressjs.com.cn/',
        explain: '基于 Node.js 平台的 web 应用开发框架',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/193960/14/4800/9324/60ac6652E8a1b9f2b/af4d3668a6ff6e80.png',
        title: 'Egg.js | 官方中文文档',
        explain: '快速入门 - 为企业级框架和应用而生',
        targetUrl: 'https://eggjs.org/zh-cn/intro/quickstart.html',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/182966/18/5803/2138/60ac6653E9595380d/ccb34a95f6dc7c9a.png',
        title: 'Koajs | 中文文档',
        explain: '基于 Node.js 平台的下一代 web 开发框架 ',
        targetUrl: 'https://koa.bootcss.com/',
      },
      {
        title: 'Nuxt.js | 官方文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/146294/5/19517/8453/60ac6960E1b64cc6a/42715ea3cef41c02.png',
        targetUrl: 'https://zh.nuxtjs.org/',
        explain: 'Vue.js 通用应用框架',
      },
      {
        title: 'NestJS | 中文文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/180509/11/5721/3307/60ac6960Ee6ea522b/5c749a6a83814a4e.png',
        targetUrl: 'https://nestjs.bootcss.com/',
        explain: '一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/190474/10/4922/6973/60ac6d9cEa0979a75/5d723077cbdf9885.png',
        title: 'localForage | 中文文档',
        explain: '一个用于浏览器本地存储数据的库',
        targetUrl: 'https://localforage.docschina.org/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/189999/29/4864/5330/60ac73c7E31315d36/83a2b71f44092159.png',
        title: 'webpack | 官方文档',
        explain:
          'webpack 是一个模块打包器。它的主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换（transform）、打包（bundle）或包裹（package）任何资源(resource or asset)。',
        targetUrl: 'https://webpack.docschina.org/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/175237/13/11281/5461/60ac73c6Edf7c17d5/03b864ff489a5af2.png',
        title: 'gulp.js | 中文文档',
        explain: '基于流(stream)的自动化构建工具',
        targetUrl: 'https://www.gulpjs.com.cn/',
      },
      {
        title: 'Sass Guidelines | 官方文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/176988/4/5835/6025/60aca2dfEc976f899/db55dbea3212d69c.png',
        targetUrl: 'https://sass-guidelin.es/zh/',
        explain: '编写稳健、可维护和可扩展的 Sass',
      },
      {
        title: 'three.js | 中文文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/176784/14/11239/5595/60aca2dfEcb13dbf1/f123b29c8aef0dfb.png',
        targetUrl: 'https://threejs.docschina.org/#manual/introduction/Creating-a-scene',
        explain: 'javascript 3D库',
      },
      {
        title: 'Less | 中文文档',
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/117246/31/19053/9041/60aca2dfE00dbcf5b/7870eb5bc1f2e4c4.png',
        targetUrl: 'http://lesscss.cn/',
        explain: 'Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性。Less 可以运行在 Node 或浏览器端。',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/184796/34/5854/6587/60acabd7E171ca770/249bdf8b02bcb9b9.png',
        title: 'Chrome开发者工具 | 中文文档',
        explain: 'Chrome 开发者工具是一套内置在Google Chrome中Web开发和调试工具。使用开发者工具来重演,调试和剖析您的网站。',
        targetUrl: 'https://www.css88.com/doc/chrome-devtools/',
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
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/173077/21/11441/4885/60aca2dfE8264d0d7/44d44c80b0e9b095.png',
        title: 'Apache ECharts',
        explain: '一个基于 JavaScript 的开源可视化图表库',
        targetUrl: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/196136/24/4799/4938/60aca2dfEcc497850/60e4148c1c85d6ff.png',
        title: 'PostCSS',
        explain: '是一个用 JavaScript 转换 CSS 的工具',
        targetUrl: 'http://postcss.docschina.org/',
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
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/176441/31/11389/4194/60ac6214E87c5c41a/1aced7cbed52605a.png',
        title: 'vue-native-websocket-vue3',
        explain: '一个基于vue3的websocket库',
        targetUrl: 'https://www.npmjs.com/package/vue-native-websocket-vue3',
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
      {
        icon: 'https://zh.javascript.info/img/favicon/apple-touch-icon-precomposed.png',
        title: '现代 JavaScript 教程',
        explain: '有关示例和任务的简单但详细的解释包括：闭包、文档和事件，以及面向对象编程等。',
        targetUrl: 'https://zh.javascript.info/',
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
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/190994/31/4878/4164/60acad3bEeb4535ee/ef496697bf6ed517.png',
        title: '优设导航',
        explain:
          '优设网站导航为设计师提供ps教程、UI设计、素材下载、高清图库、配色方案、用户体验、网页设计等全方位设计师网站导航指引。每周更新及时，是优秀设计联盟（SDC）旗下最实用、最专业、最全面、最好用的设计师导航！',
        targetUrl: 'https://hao.uisdc.com/',
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
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/188571/3/4900/3232/60acab58Eba27da57/64bbaccfb40c7ed6.png',
        title: 'Image Upload',
        explain: '上传图片,文件的网站',
        targetUrl: 'https://sm.ms/',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/193260/29/4869/4558/60acabd7Edf2b8a73/f5585e2ba8d3a5a1.png',
        title: 'Emmet快捷方式查询',
        explain: '查询Emmet语法的一个网站',
        targetUrl: 'http://www.aseoe.com/special/emmet/#',
      },
      {
        icon: '//img10.360buyimg.com/imgzone/jfs/t1/179528/3/5637/3396/60ab1c19Ebb9f2301/0d21547c755c6b84.png',
        title: 'Git Cheat Sheet',
        explain: 'Git命令表查询',
        targetUrl: 'https://shfshanyue.github.io/cheat-sheets/git',
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        explain: 'Css 兼容性速查',
        targetUrl: 'https://caniuse.com/',
      },
      {
        icon: 'https://chokcoco.github.io/CSS-Inspiration/logo2.png',
        title: 'cssinspirationguide',
        explain: 'css 灵感',
        targetUrl: 'https://chokcoco.github.io/CSS-Inspiration/#/',
      },
      {
        icon: 'https://lhammer.cn/You-need-to-know-css/static/logo.png',
        title: 'CSS Tricks',
        explain: 'CSS特效,动画 参考',
        targetUrl: 'https://lhammer.cn/You-need-to-know-css/#/',
      },
      {
        icon: 'https://imgtu.com/content/images/system/logo_homepage_1614099241093_2dd41b.png',
        title: '路过图床',
        explain: '免费图片上传, 专业图片外链, 免费公共图床',
        targetUrl: 'https://imgtu.com/',
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

const mottoList = ['凡所有相，皆为虚妄。若见诸相非相，即见如来', '不取于相,如如不动', '万法皆空,因果不空'];

export const getMotto = () => {
  const random = Math.floor(Math.random() * mottoList.length);
  return mottoList[random];
};
