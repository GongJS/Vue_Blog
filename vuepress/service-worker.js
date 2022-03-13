/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "056de719385cb62ecdf1892c08f2e83d"
  },
  {
    "url": "assets/css/0.styles.d11e3aca.css",
    "revision": "3f2026474ecb584a570904712d1d12d2"
  },
  {
    "url": "assets/img/布局二.79a822fb.jpg",
    "revision": "79a822fb2e6306d0f1ca394188814b03"
  },
  {
    "url": "assets/img/布局三.099b85d4.jpg",
    "revision": "099b85d433a042b25be55a2133e0f998"
  },
  {
    "url": "assets/img/布局一.b421e34b.jpg",
    "revision": "b421e34b8268130a071bc510a8eec4a5"
  },
  {
    "url": "assets/img/常见布局一.089a9df1.jpg",
    "revision": "089a9df1c7e93d949d917e565add25ca"
  },
  {
    "url": "assets/img/堆叠上下文.62f0cc8c.jpg",
    "revision": "62f0cc8ca22565050b994aaa2840530e"
  },
  {
    "url": "assets/img/堆叠顺序.5e15ab39.jpg",
    "revision": "5e15ab392b38a94133c994113ab69324"
  },
  {
    "url": "assets/img/多行文字对齐.ce94aed9.jpg",
    "revision": "ce94aed9c2ae3ce5e5ef26e5af6d3fd0"
  },
  {
    "url": "assets/img/多行文字溢出对齐.98768287.jpg",
    "revision": "98768287decf435c028f7a6d7cbd7d16"
  },
  {
    "url": "assets/img/浮动平均布局.b055b72d.jpg",
    "revision": "b055b72d51c54aa1d0ce3c1edb3e8c70"
  },
  {
    "url": "assets/img/宽高.ffe346de.jpg",
    "revision": "ffe346de7409241641a1ec18aa688031"
  },
  {
    "url": "assets/img/手机端布局.a62c6867.jpg",
    "revision": "a62c6867e4cf66ba7337adc01b4c7a90"
  },
  {
    "url": "assets/img/attribute.a380a2f7.jpg",
    "revision": "a380a2f760dbb550de711f03ce526fac"
  },
  {
    "url": "assets/img/baobao.07be599b.jpg",
    "revision": "07be599b34232fcaa593d67501de66c2"
  },
  {
    "url": "assets/img/BFC-1.c86be96e.jpg",
    "revision": "c86be96ee6df2f080d56f6aead763f89"
  },
  {
    "url": "assets/img/BFC-2.7aad7e7a.jpg",
    "revision": "7aad7e7ad058f80fcf982a7bc34d85d3"
  },
  {
    "url": "assets/img/BFC-弟弟.6765f0da.jpg",
    "revision": "6765f0dacaebc12d0d05b4b4b799e22b"
  },
  {
    "url": "assets/img/BFC-哥哥.d444895f.jpg",
    "revision": "d444895f4c2d47e792bbd21797ee0e5c"
  },
  {
    "url": "assets/img/BFC-孙子.358ae27d.jpg",
    "revision": "358ae27dbb31dd6cd5006999f3fda419"
  },
  {
    "url": "assets/img/build.37c94c45.gif",
    "revision": "37c94c45ff7189b1cebb67942dd239e4"
  },
  {
    "url": "assets/img/dapp-1.9c7025db.jpeg",
    "revision": "9c7025dbcb9b10ce4601f0efe0a917be"
  },
  {
    "url": "assets/img/dapp-2.e292bba1.jpeg",
    "revision": "e292bba1dde077a5e3cbe19947befec9"
  },
  {
    "url": "assets/img/flex-基本概念.57d54885.jpg",
    "revision": "57d548858465d32c8354461ed29ccca3"
  },
  {
    "url": "assets/img/flex-平局布局.2b5709c6.jpg",
    "revision": "2b5709c6f8fe265efea7de4b1e33c63e"
  },
  {
    "url": "assets/img/flex-container.04d2c2dc.jpg",
    "revision": "04d2c2dc8f27108f075fe5e07f84471c"
  },
  {
    "url": "assets/img/flex-item.167d3bc7.jpg",
    "revision": "167d3bc75110104744acc1dc7bede03d"
  },
  {
    "url": "assets/img/get.80142e79.jpg",
    "revision": "80142e79f69b29914d1c5dedb2a15efc"
  },
  {
    "url": "assets/img/index.40106efb.jpg",
    "revision": "40106efb472932b47a5e6c16dd1db6e2"
  },
  {
    "url": "assets/img/koaLogin.1acdc926.jpg",
    "revision": "1acdc9265e0f24a12c70342c7c7e59cd"
  },
  {
    "url": "assets/img/library-1.0cd2b32b.jpg",
    "revision": "0cd2b32becb3883898f6138db86d0d60"
  },
  {
    "url": "assets/img/library-2.377eb9ee.jpg",
    "revision": "377eb9ee8797b4a32006a285bcda30cd"
  },
  {
    "url": "assets/img/library-3.1be9bf81.jpg",
    "revision": "1be9bf81734865831e392d7a2115c437"
  },
  {
    "url": "assets/img/login.86dd726b.gif",
    "revision": "86dd726be20497ea3f0608be2724088e"
  },
  {
    "url": "assets/img/login.faeef076.jpg",
    "revision": "faeef076e5b826cfc59cbe402eba210c"
  },
  {
    "url": "assets/img/loginTest.fcb80ab4.gif",
    "revision": "fcb80ab44c661ad8d8f3b11534fd1f3e"
  },
  {
    "url": "assets/img/margin合并.bf0fafb4.jpg",
    "revision": "bf0fafb40e68c9ebfc29e092069e0f8e"
  },
  {
    "url": "assets/img/operator.63196570.gif",
    "revision": "631965705cd62d55cc59ae226d813041"
  },
  {
    "url": "assets/img/property.05b3640e.jpg",
    "revision": "05b3640ee4bf6da07101e23b61deb407"
  },
  {
    "url": "assets/img/rightMenuIcon.8c3cb683.png",
    "revision": "8c3cb6831a80e597428d05cff372c5a4"
  },
  {
    "url": "assets/img/same.ee0c8185.jpg",
    "revision": "ee0c8185527eb723e6298c81a5be547c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.9a6dac23.gif",
    "revision": "9a6dac235d925cc34fd6a45202583685"
  },
  {
    "url": "assets/img/table.a586973f.jpg",
    "revision": "a586973f208a0bafd6485eb0433872a9"
  },
  {
    "url": "assets/img/test.3d2b71ad.jpg",
    "revision": "3d2b71ad90c1de91a9a535873ea7ed96"
  },
  {
    "url": "assets/img/testApi.a23b6226.jpg",
    "revision": "a23b6226bfaa9ad173fe300c88942c87"
  },
  {
    "url": "assets/img/this.2186bb80.jpg",
    "revision": "2186bb802cbd065830d467bd6282d620"
  },
  {
    "url": "assets/img/token.107ddb56.jpeg",
    "revision": "107ddb5680dcab94ca22039a3282d78c"
  },
  {
    "url": "assets/img/token.f5611172.jpg",
    "revision": "f5611172bedbed3345a9ba6bc1583fb6"
  },
  {
    "url": "assets/img/touzi-1.afa4cf2c.jpg",
    "revision": "afa4cf2c4f76d196adba531834999dee"
  },
  {
    "url": "assets/img/touzi-2.c05f253e.jpg",
    "revision": "c05f253ef93ee7b7e27f3382289318b1"
  },
  {
    "url": "assets/img/touzi-3.93d543aa.jpg",
    "revision": "93d543aa22f09e4a17d697dfbd6c56b9"
  },
  {
    "url": "assets/img/touzi-4.4d3310b2.jpg",
    "revision": "4d3310b29de41ec8a453c82057ef7f56"
  },
  {
    "url": "assets/img/touzi-5.5d48489a.jpg",
    "revision": "5d48489a59e8b65b598a464e272e27de"
  },
  {
    "url": "assets/img/unloginTest.15540c12.gif",
    "revision": "15540c1209f58c8ecb068b74b0f555f1"
  },
  {
    "url": "assets/img/vue-antd.36e0f921.jpg",
    "revision": "36e0f92122d39218cb83539b6d0071ba"
  },
  {
    "url": "assets/img/vue-cli.69850cad.jpg",
    "revision": "69850cad97c285b2d7c7418d9452a4ee"
  },
  {
    "url": "assets/img/vuepressScreen.ac725735.jpg",
    "revision": "ac7257350e6602332b15313119cec590"
  },
  {
    "url": "assets/img/workbench-1.b8235887.jpg",
    "revision": "b8235887f8e9c620a665593897d78eea"
  },
  {
    "url": "assets/img/xian.161f1160.jpg",
    "revision": "161f1160f85acaccf8e975bededd2ce7"
  },
  {
    "url": "assets/img/yinyong.a467856a.jpg",
    "revision": "a467856a114002a7386a981aaadc944b"
  },
  {
    "url": "assets/img/yuanxing.de0e4ec4.jpg",
    "revision": "de0e4ec498437c02f11a73ee2beed6f8"
  },
  {
    "url": "assets/img/zhileixing.6b1b6b4a.jpg",
    "revision": "6b1b6b4a42617b5c7fa857df3d63d2fe"
  },
  {
    "url": "assets/js/10.bad99ffd.js",
    "revision": "3a32a11e8511b00ce634cbac6978751b"
  },
  {
    "url": "assets/js/11.64226851.js",
    "revision": "0f39c80583236e7a466584246d96f23f"
  },
  {
    "url": "assets/js/12.3aa659d7.js",
    "revision": "e91b1ecb7baa48726a82950ca950b089"
  },
  {
    "url": "assets/js/13.32ae7108.js",
    "revision": "ddedb9ff6134e3e478411383c91da0cf"
  },
  {
    "url": "assets/js/14.c861009f.js",
    "revision": "382893d228235c7bb0405d175fc33f9d"
  },
  {
    "url": "assets/js/15.7b7041e8.js",
    "revision": "bf1626778054708654732e0d7fedf956"
  },
  {
    "url": "assets/js/16.3cffb15f.js",
    "revision": "4c930f96d8695009894b9f8aba6ed47d"
  },
  {
    "url": "assets/js/17.9a35e330.js",
    "revision": "ab56c6e146241ea26e550b167ecbdf80"
  },
  {
    "url": "assets/js/18.3e0fac83.js",
    "revision": "1f67ad28679aefb2a78f7a5dc7076ae2"
  },
  {
    "url": "assets/js/19.0353f958.js",
    "revision": "b4d1acaade5a29e4da9f02ede936a63a"
  },
  {
    "url": "assets/js/2.08cbc8da.js",
    "revision": "cc1b2b062cc87e9acbfe8969ef8aa89c"
  },
  {
    "url": "assets/js/20.e2963635.js",
    "revision": "00fa2e3f942cde459d9a8e1fbf5fb268"
  },
  {
    "url": "assets/js/21.d64571ae.js",
    "revision": "8e3846f0d1333299e509b059afadb277"
  },
  {
    "url": "assets/js/22.5afc1816.js",
    "revision": "d131eb646bf91f078092cf77479f9279"
  },
  {
    "url": "assets/js/23.85693ffd.js",
    "revision": "fd6dfe3e262ce532d2cdba613b2c68eb"
  },
  {
    "url": "assets/js/24.c3ac0869.js",
    "revision": "068ffe03ea8a6732873dbeca780e83aa"
  },
  {
    "url": "assets/js/25.bf65ce45.js",
    "revision": "7e1739433ef906b439f9a876a7698ecb"
  },
  {
    "url": "assets/js/26.9774f186.js",
    "revision": "b64bac173f58fcc5f01915e5f35a1527"
  },
  {
    "url": "assets/js/27.f0994f12.js",
    "revision": "3800223ddc4b69aa725e0c18f11dc2fe"
  },
  {
    "url": "assets/js/28.d40246ff.js",
    "revision": "f4224558953a2f9e8b22d2dbb892d4a9"
  },
  {
    "url": "assets/js/29.bc339720.js",
    "revision": "ff4ac5a64aaae070c0cae4931c085d7f"
  },
  {
    "url": "assets/js/3.54244852.js",
    "revision": "7b417048b7211bdb15386ebe733b5676"
  },
  {
    "url": "assets/js/30.5cebfccc.js",
    "revision": "f6b87be5e8312e4ec8a1e78640bd089c"
  },
  {
    "url": "assets/js/31.03848d71.js",
    "revision": "4315fa536b92b4f6512b37be355c765e"
  },
  {
    "url": "assets/js/32.73f48547.js",
    "revision": "0bfbb7cc762f8b1e1e6a93206eb2c6be"
  },
  {
    "url": "assets/js/33.445e6284.js",
    "revision": "83a97dae184cf5f2769f47882c63a167"
  },
  {
    "url": "assets/js/34.c77ffcae.js",
    "revision": "ec9696c6f372c3a919f3ff1d6c37be81"
  },
  {
    "url": "assets/js/35.42a63e76.js",
    "revision": "4f4db47d740da2366a7db95e3c38afa6"
  },
  {
    "url": "assets/js/36.7d63532d.js",
    "revision": "4165678729cc6a4f95516579bf6b1212"
  },
  {
    "url": "assets/js/37.6ae081d2.js",
    "revision": "4a99b14f1dfec1abe6c4be3288d51db7"
  },
  {
    "url": "assets/js/38.103ad045.js",
    "revision": "ec31905c2b8952cb1549d9c88ef5fc2e"
  },
  {
    "url": "assets/js/39.ae832337.js",
    "revision": "99df2401b4d56bbe68925c60d3b56493"
  },
  {
    "url": "assets/js/4.d6b270f9.js",
    "revision": "6c6dfe12ac6b9a3f07a15e14725db32d"
  },
  {
    "url": "assets/js/5.4a45d1fd.js",
    "revision": "5411a9120adbc0f0ab493030e99ec164"
  },
  {
    "url": "assets/js/6.41c5920c.js",
    "revision": "644a8330d61aa52fc65a21232debc631"
  },
  {
    "url": "assets/js/7.3d63a32f.js",
    "revision": "98f301cfc471c554bbb562157f8b2ce2"
  },
  {
    "url": "assets/js/8.90059e99.js",
    "revision": "8a822380d66d9d036113e939fbc5dc3f"
  },
  {
    "url": "assets/js/9.385657f4.js",
    "revision": "6721a3984452aadb560b7fa0e6743986"
  },
  {
    "url": "assets/js/app.ad91c88b.js",
    "revision": "de0563ce91f39e2f2d3bd1d9d5f2aa9b"
  },
  {
    "url": "css/常见布局.html",
    "revision": "814700c4ed7bfa9683eb8c8086826032"
  },
  {
    "url": "css/堆叠上下文.html",
    "revision": "e4207c47bbce8aeddbd4c2a97551f5c8"
  },
  {
    "url": "css/移动端.html",
    "revision": "40ae1470b7c7f92c6622913fb8e6465b"
  },
  {
    "url": "css/BFC.html",
    "revision": "16a4051ac7b63ad0aeb76c485f3e15a6"
  },
  {
    "url": "css/Flex.html",
    "revision": "4f7c5ceec3996d19b342ad80f6fbba86"
  },
  {
    "url": "css/index.html",
    "revision": "91f3289e1ce4f72e1abe6f8afac2cf7d"
  },
  {
    "url": "ES6/解构赋值.html",
    "revision": "7268689651ac9782ffcc1845ef0ab8d5"
  },
  {
    "url": "ES6/index.html",
    "revision": "439cd9ea78f8f082eca5d34d72792ab6"
  },
  {
    "url": "essay/index.html",
    "revision": "67f8dd7fc780e2142dcd7f3f195fc43d"
  },
  {
    "url": "essay/touzi-2017.html",
    "revision": "a26ebe7b65fe9c94d1a1a71009350da1"
  },
  {
    "url": "friends/index.html",
    "revision": "7a45ec6635f8b77b8fe92bcddaa969a5"
  },
  {
    "url": "hero.png",
    "revision": "631612eccd822da8696d23a4ac599333"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "f824392111acdb1397dafa42079c9f0d"
  },
  {
    "url": "js-cli/index.html",
    "revision": "16544ca585fc82010eb3376c909469d6"
  },
  {
    "url": "JS/array-obj.html",
    "revision": "328237f46621aae003c1a45f9d4ecb0b"
  },
  {
    "url": "JS/async.html",
    "revision": "17c8eb3a6dfd8f087ef9c46a721abff1"
  },
  {
    "url": "JS/date.html",
    "revision": "332cd1a972885610e23668c6735674bc"
  },
  {
    "url": "JS/index.html",
    "revision": "21e3e53339dc1708444877956fd51eba"
  },
  {
    "url": "JS/JS-web-API.html",
    "revision": "835a5d6672cdfcf1f8a3c2a061eb0251"
  },
  {
    "url": "JS/prototype.html",
    "revision": "08364d566cf072ca81022f56487cb200"
  },
  {
    "url": "JS/scope.html",
    "revision": "3456c43882d6a718154b7a49c55bf747"
  },
  {
    "url": "JS/variable.html",
    "revision": "433b05dea12bb5c8c42504a779886359"
  },
  {
    "url": "koa2/搭建后端环境.html",
    "revision": "4b750a168288576e2b62c2be7f7347a2"
  },
  {
    "url": "koa2/登录功能.html",
    "revision": "df598d356acb5cb468ffb5d71bca005e"
  },
  {
    "url": "koa2/构建前端页面.html",
    "revision": "5e65135d5a1749e49e1143d15f683d63"
  },
  {
    "url": "koa2/启动koa服务.html",
    "revision": "d9be246130cf3e776c3f1fa5d4d3f741"
  },
  {
    "url": "koa2/实现员工的增删改查.html",
    "revision": "ba9ae62d2daa052e5b0f6c651c589e8f"
  },
  {
    "url": "koa2/项目部署.html",
    "revision": "02bdd52c5d6660ebe9e796d6a889b673"
  },
  {
    "url": "koa2/写在最后.html",
    "revision": "af83cf8680183bbf010cba6add26387a"
  },
  {
    "url": "koa2/index.html",
    "revision": "0976477ee43035b3fecea4fa3b5a23e8"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "project/index.html",
    "revision": "5431fe3e74d063c0cf02f6091b27397f"
  },
  {
    "url": "resume/index.html",
    "revision": "32a0f32bbb9d00fd116089ce763f16a9"
  },
  {
    "url": "vuepress/index.html",
    "revision": "7afc80da5d37b892c63a0f714baaac3d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
