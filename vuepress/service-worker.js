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
    "revision": "c03c170be3e755f2a13a3f3add7411ed"
  },
  {
    "url": "assets/css/0.styles.29665281.css",
    "revision": "709443dbc8ee75ad21850cfb8deed014"
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
    "url": "assets/img/operator.63196570.gif",
    "revision": "631965705cd62d55cc59ae226d813041"
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
    "url": "assets/js/10.40096948.js",
    "revision": "f6e18ffbfc5f55ceec4d2659aee3569c"
  },
  {
    "url": "assets/js/11.49098ee8.js",
    "revision": "bb960b0db3f093c3b7c7184415c06a39"
  },
  {
    "url": "assets/js/12.db646a93.js",
    "revision": "b96a0c8ca05a693a3d9eafd7f7afb8d1"
  },
  {
    "url": "assets/js/13.efc50a32.js",
    "revision": "bcb4f55e64b83e3ecaa5b02a99e32d39"
  },
  {
    "url": "assets/js/2.cc88ace4.js",
    "revision": "ed9b61a5052a98dd6814f8a663b3bceb"
  },
  {
    "url": "assets/js/3.e78e3f7f.js",
    "revision": "d97162264e1ef2046eec4a2e88c7c0c9"
  },
  {
    "url": "assets/js/4.9f97b58b.js",
    "revision": "88e5545346f17bdfac965c12610a81f9"
  },
  {
    "url": "assets/js/5.b91bf4a7.js",
    "revision": "1e0aac9c8942d694f1903f65c753005f"
  },
  {
    "url": "assets/js/6.c011b60c.js",
    "revision": "f5ad46664af6fa7596599e0b77268319"
  },
  {
    "url": "assets/js/7.4d509678.js",
    "revision": "8f0dcb88121323af7ad1160b1d7c9ec8"
  },
  {
    "url": "assets/js/8.df1d2719.js",
    "revision": "c6aeec62c495896e915ed4c2fcc5923e"
  },
  {
    "url": "assets/js/9.cd3297fd.js",
    "revision": "eebb9c4d8d0277c3ef239b5ac6bb36ce"
  },
  {
    "url": "assets/js/app.26513ded.js",
    "revision": "8dddc9cda825b85a699f8cc33b6e7716"
  },
  {
    "url": "friends/index.html",
    "revision": "0e1b828da251859b9de1226cdc014baf"
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
    "revision": "8de848fec923fea329eb7c9293ff50d9"
  },
  {
    "url": "koa2/index.html",
    "revision": "f513bb5bb26f6f008a013d4b9ffa4ea7"
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
    "revision": "5b0383c630aa3acf27f166aa4a3abb82"
  },
  {
    "url": "resume/index.html",
    "revision": "4276547d3eceda7fac43755f40834596"
  },
  {
    "url": "vuepress/index.html",
    "revision": "d7d994d31f4c0979bf31c9271ca82e83"
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
