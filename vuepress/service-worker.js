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
    "revision": "56f6d37de0f94b090e2f2d7cdfee5827"
  },
  {
    "url": "assets/css/0.styles.d11e3aca.css",
    "revision": "e5477f27806c7438d302419ad55ff2d6"
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
    "url": "assets/img/宽高.ffe346de.jpg",
    "revision": "ffe346de7409241641a1ec18aa688031"
  },
  {
    "url": "assets/js/10.9f98ca6a.js",
    "revision": "6444bd041e9e68942d65eab109e09f14"
  },
  {
    "url": "assets/js/11.7849bdd0.js",
    "revision": "d3b5c17c1b41731d2fa8585efbb87b88"
  },
  {
    "url": "assets/js/12.dac065a8.js",
    "revision": "64573dd71480d705477990e1fd602a8a"
  },
  {
    "url": "assets/js/13.a09c4a2d.js",
    "revision": "b9f2f15b19e3bf7a7cc2cf94523f0e20"
  },
  {
    "url": "assets/js/14.aadc0260.js",
    "revision": "b90d76c6b4c479d8d2f4f539703fb892"
  },
  {
    "url": "assets/js/15.877ee9fb.js",
    "revision": "01cbab387045e6a3df9d49d1926667d8"
  },
  {
    "url": "assets/js/16.a83cd65f.js",
    "revision": "3e5053c9a352540ab39c2fd3afb782d7"
  },
  {
    "url": "assets/js/17.2ca48000.js",
    "revision": "3870e6f0a40a56acbf73d6459e7d46e2"
  },
  {
    "url": "assets/js/18.b123fdf9.js",
    "revision": "7bf6609bb1f5e4381268116922254b30"
  },
  {
    "url": "assets/js/19.995ae0d5.js",
    "revision": "cc84561dbcc84750728914cff3ef9d57"
  },
  {
    "url": "assets/js/2.7117a227.js",
    "revision": "32a9551d35e1cc79e5da28700af91fe6"
  },
  {
    "url": "assets/js/20.8950d8b1.js",
    "revision": "2919426e9d9a4626636ed101a93d9929"
  },
  {
    "url": "assets/js/21.ec69d665.js",
    "revision": "c92922bb0226bdc76307330ce255d1ce"
  },
  {
    "url": "assets/js/22.cdb3022f.js",
    "revision": "4acf2310be9903647b817d474e6bfbb2"
  },
  {
    "url": "assets/js/23.8669b7cc.js",
    "revision": "6d32e2bcdefc7faa5d149772cd386fab"
  },
  {
    "url": "assets/js/24.1c88333b.js",
    "revision": "6ef7a15885ed13cab9b2df5da0318f52"
  },
  {
    "url": "assets/js/25.2e4cf4a0.js",
    "revision": "b7f53b863574026862bc47d3ae69aff4"
  },
  {
    "url": "assets/js/26.a5f44df2.js",
    "revision": "1e01372e33d4745b8efdcea2b7cf8ce8"
  },
  {
    "url": "assets/js/27.621c85a7.js",
    "revision": "ca5215867cbd4a3327dad3c6c236c005"
  },
  {
    "url": "assets/js/28.d64bae69.js",
    "revision": "1f5d16e7032df61d500da0d2769777be"
  },
  {
    "url": "assets/js/29.e37e014e.js",
    "revision": "0dcdca076f92aeb56e08757d46f47c23"
  },
  {
    "url": "assets/js/3.77d4ca05.js",
    "revision": "3932e884bdeb6db5cd1078499233812a"
  },
  {
    "url": "assets/js/30.9d6f45b3.js",
    "revision": "320649761dc830cd5bb260627d1f1742"
  },
  {
    "url": "assets/js/31.d7283254.js",
    "revision": "cedf4a0e561aa630cf53b216d24fb078"
  },
  {
    "url": "assets/js/32.a8d109e0.js",
    "revision": "def3e92ca22c87da3378a929c468102b"
  },
  {
    "url": "assets/js/4.e2cbffb8.js",
    "revision": "f3bec3b3fc1b07b70cde977bf8a25f86"
  },
  {
    "url": "assets/js/5.b74d96c6.js",
    "revision": "96a1e7d3d89b5ebca1cf39fe7b219140"
  },
  {
    "url": "assets/js/6.ee178cc6.js",
    "revision": "4c4122c4c79681617f8d3a54c51f1925"
  },
  {
    "url": "assets/js/7.0d862c02.js",
    "revision": "773d6e5d2ed8d3f5b5812bdebfee6e52"
  },
  {
    "url": "assets/js/8.0d64cd75.js",
    "revision": "f8242921300c9ae39b673a4c2ca7f115"
  },
  {
    "url": "assets/js/9.530ec94f.js",
    "revision": "8909d152f40a496b51e4ca2195e9c890"
  },
  {
    "url": "assets/js/app.f5c29c1f.js",
    "revision": "94c34bdc3a1ff687cf0c4b62c1917d1a"
  },
  {
    "url": "css/index.html",
    "revision": "273181b1688169ff64e865ef360b7230"
  },
  {
    "url": "css/堆叠上下文.html",
    "revision": "aec92b3bc9deef11bffe2c5f66600964"
  },
  {
    "url": "essay/index.html",
    "revision": "d7129a5a7a5bdc145358cbe8950088e0"
  },
  {
    "url": "essay/touzi-2017.html",
    "revision": "694775be7beeb0a9c94a33732401ca9f"
  },
  {
    "url": "friends/index.html",
    "revision": "d6feeda30d6b524b3c1fb8fb2254d697"
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
    "revision": "509f40d583d4177db17133fe3b953dda"
  },
  {
    "url": "JS/array-obj.html",
    "revision": "2a7990c49848dfe450bd7dc48df19be8"
  },
  {
    "url": "JS/async.html",
    "revision": "12ba7efaeab9bd6c02d87022b570e739"
  },
  {
    "url": "JS/date.html",
    "revision": "a526693e69d20439a307b6208c097a24"
  },
  {
    "url": "JS/index.html",
    "revision": "c16bd6670a06db59eb421f01944f4d63"
  },
  {
    "url": "JS/JS-web-API.html",
    "revision": "d0a03a2ca42835bf32c7f47f602948a8"
  },
  {
    "url": "JS/prototype.html",
    "revision": "32208f2225700b6979740a3312ef91a1"
  },
  {
    "url": "JS/scope.html",
    "revision": "a0f788153b3a9cdaef844fb8c84a22d8"
  },
  {
    "url": "JS/variable.html",
    "revision": "82682533484550e4cd95f3c513cc12db"
  },
  {
    "url": "koa2/index.html",
    "revision": "90deeb962f8f20a39b3261721362576a"
  },
  {
    "url": "koa2/写在最后.html",
    "revision": "f9de2a72f7d2137ffbde7eba3f476709"
  },
  {
    "url": "koa2/启动koa服务.html",
    "revision": "530686388bef0feb6b90fb5e28907db3"
  },
  {
    "url": "koa2/实现员工的增删改查.html",
    "revision": "532f78319360201cb37dda49ae919d7a"
  },
  {
    "url": "koa2/搭建后端环境.html",
    "revision": "253a16db224cf5b8a33bf0d0a80ff174"
  },
  {
    "url": "koa2/构建前端页面.html",
    "revision": "e47fb71e0f8271249f231a12144eb8e7"
  },
  {
    "url": "koa2/登录功能.html",
    "revision": "48d03a130fd2d446bde0ce0d24f0f1b2"
  },
  {
    "url": "koa2/项目部署.html",
    "revision": "42aa1e6c6f75ad692d9ff1a53e79b8a3"
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
    "revision": "ee7ef108e68aca2b9e6d47c7f0c874cd"
  },
  {
    "url": "resume/index.html",
    "revision": "839402698d6bfa80e3be18f2ccffb192"
  },
  {
    "url": "vuepress/index.html",
    "revision": "3fe7e8f21ee73269ffcc2843d65b6a15"
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
