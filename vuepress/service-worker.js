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
    "revision": "cbe60cbf379675575adbd9dc7cb83f11"
  },
  {
    "url": "assets/css/0.styles.2022b124.css",
    "revision": "88cc04aa62e7a60572c4321dc2598f4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3786e99b.js",
    "revision": "375a9c115934700266c919671be6463f"
  },
  {
    "url": "assets/js/11.f26b0c60.js",
    "revision": "b549eb8b3dd79677773113d4841bbf37"
  },
  {
    "url": "assets/js/12.a7415b91.js",
    "revision": "3b3ee290ac3c617b328677f4be8d3298"
  },
  {
    "url": "assets/js/13.e30b7383.js",
    "revision": "3cb53860c10ea166fbf70e11cacb483d"
  },
  {
    "url": "assets/js/14.f8bff52f.js",
    "revision": "78da8a1473c0d30e952195cae8788422"
  },
  {
    "url": "assets/js/15.b991ad8b.js",
    "revision": "e36f0dfc5bbfa517dcc8c48a79f6f252"
  },
  {
    "url": "assets/js/16.3552d0cf.js",
    "revision": "c8ea8435a26a33336c1f7b1da3ba20bb"
  },
  {
    "url": "assets/js/17.24d1a15d.js",
    "revision": "90d3699473cc307a95fc17b103c8ea62"
  },
  {
    "url": "assets/js/18.325edfe0.js",
    "revision": "c14a49cdf600a8a901c75642ff27e4e5"
  },
  {
    "url": "assets/js/19.9224d301.js",
    "revision": "4f79eaeeb878550152161592b071df8a"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.20617ea8.js",
    "revision": "df8825d250e934804c9d1693bf9de288"
  },
  {
    "url": "assets/js/21.73653211.js",
    "revision": "6cfacb16a3a2bcafe96587c47e983adf"
  },
  {
    "url": "assets/js/22.13df7c1b.js",
    "revision": "3080d2a5381501a0d0e329046a6b7e05"
  },
  {
    "url": "assets/js/23.28d3c5fc.js",
    "revision": "98797a23f64910ec949254392eacaf18"
  },
  {
    "url": "assets/js/24.84694a64.js",
    "revision": "23801d65679b784317c8ee2b57c15f57"
  },
  {
    "url": "assets/js/25.b87fb045.js",
    "revision": "b78548a041d92048d320ccf9870eabc2"
  },
  {
    "url": "assets/js/26.b9ce4985.js",
    "revision": "dba82c9c660d1e8460676f0c388b1922"
  },
  {
    "url": "assets/js/27.a351f4d2.js",
    "revision": "c33d92e078079ada07498b8d026514cb"
  },
  {
    "url": "assets/js/28.4f446fcb.js",
    "revision": "c715422d5d552a96216c980dc713e31b"
  },
  {
    "url": "assets/js/29.7b3f5ab9.js",
    "revision": "adc4103d6c81a591a51703383c93db7c"
  },
  {
    "url": "assets/js/3.5bb45b47.js",
    "revision": "f0911a03abd35a860e6b942e7057ce36"
  },
  {
    "url": "assets/js/30.c2dc59ee.js",
    "revision": "6218a5f2a3b8fdaa2a933e719b14011d"
  },
  {
    "url": "assets/js/31.c5b01820.js",
    "revision": "9ac65c392642f4a22709b0e2d34b1124"
  },
  {
    "url": "assets/js/4.d6a60922.js",
    "revision": "968feb4e5f35e2a75821c8d9a21025f8"
  },
  {
    "url": "assets/js/5.d4ad1f5b.js",
    "revision": "8f1c4a48503bbe5581dab43f120af3e6"
  },
  {
    "url": "assets/js/6.2aa347b6.js",
    "revision": "bcb813d89963fa59c0341e702467511c"
  },
  {
    "url": "assets/js/7.a5fdc086.js",
    "revision": "8721853ddfdacffc4c04e5d9607cc60c"
  },
  {
    "url": "assets/js/8.b6ed9927.js",
    "revision": "12556e6d4d5cf6a99fe03a9be6cf8131"
  },
  {
    "url": "assets/js/9.2186ef3a.js",
    "revision": "a489423b663c34fa53989a3b12287e6f"
  },
  {
    "url": "assets/js/app.96d07b22.js",
    "revision": "8e3aaf8c3cf84217fa934205e8de4bcd"
  },
  {
    "url": "config/index.html",
    "revision": "1a68a838f0ce281fdca4d7782d9605a8"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "3d6c2ba249bfd738ba61140960958104"
  },
  {
    "url": "guide/assets.html",
    "revision": "8e266442290fc1325a23c56884a28f98"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "7dff6eb191af0dfc449234abc6eb317d"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "6c11dfc653ceb538f59baea4ab19800d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "a32ec94cbf16a89e71feb26412abf015"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a74a4db982e3981d15113d9e6249d5e8"
  },
  {
    "url": "guide/i18n.html",
    "revision": "b19c15dd255d72cea1be80fa0dc52a9d"
  },
  {
    "url": "guide/index.html",
    "revision": "4c9986244ac86924ed0d62daa03ab780"
  },
  {
    "url": "guide/markdown.html",
    "revision": "a8555bf048f183ae034f7532d88923c5"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "0ace9c83d50c11f24c14d5ff52e87ad8"
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
    "revision": "6eb8a85c056655d6c9029aafa9a48bee"
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
    "url": "zh/config/index.html",
    "revision": "aaf55ff3dcd7c7c0726c8145925de2fb"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "e3448f41eb92b3fec7f5ace558e983c9"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "2525a27d4173a1e8aed8c9bb0cf565ed"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "8f16d63d7041ecb364ab1a557ed3f68e"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "1070c927699b873eb3ade7d9b73de37e"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "934bb0b8131a276509f7737fbd63822b"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a378782784d60aedcdb21162c8d4badb"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5f0adfbb47a59a1d03f0bbf302415811"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "19a3215ad71e3c81b990e3255b5a4e1c"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "03c0c43f7ad127f2548fa0b710142d20"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "dd3dab36c2b0b811bc0551b13079dd9c"
  },
  {
    "url": "zh/index.html",
    "revision": "b363aa484e9fbcb2e3819ee37e9e2ca2"
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
