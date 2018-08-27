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
    "revision": "fa30f629667bd2e4fab2c2ed557fc532"
  },
  {
    "url": "assets/css/0.styles.0b41d09c.css",
    "revision": "709443dbc8ee75ad21850cfb8deed014"
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
    "url": "assets/img/index.40106efb.jpg",
    "revision": "40106efb472932b47a5e6c16dd1db6e2"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/token.107ddb56.jpeg",
    "revision": "107ddb5680dcab94ca22039a3282d78c"
  },
  {
    "url": "assets/img/vue-antd.36e0f921.jpg",
    "revision": "36e0f92122d39218cb83539b6d0071ba"
  },
  {
    "url": "assets/img/vuepressScreen.ac725735.jpg",
    "revision": "ac7257350e6602332b15313119cec590"
  },
  {
    "url": "assets/js/10.9bcb42b9.js",
    "revision": "042e7898ff00905430a6a283c4346e3c"
  },
  {
    "url": "assets/js/11.796bc1e9.js",
    "revision": "488325b0dc1d32ca1573f7849a7011d7"
  },
  {
    "url": "assets/js/2.bf09ab3e.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/3.4c23ad56.js",
    "revision": "9f66151704da0021a2704fdea12905df"
  },
  {
    "url": "assets/js/4.261355ba.js",
    "revision": "69209c7e97d1b776feadd162cf0565f9"
  },
  {
    "url": "assets/js/5.49390ec2.js",
    "revision": "9cf188966870298e0d98c1138f6e1911"
  },
  {
    "url": "assets/js/6.02090b31.js",
    "revision": "bf268de05adf3ce4338104a65ccab417"
  },
  {
    "url": "assets/js/7.91c16846.js",
    "revision": "afb0abc93e1162810d6347f59c7bfd6f"
  },
  {
    "url": "assets/js/8.e4d9ef09.js",
    "revision": "24bffe5fda55b3547c53f811be932ed2"
  },
  {
    "url": "assets/js/9.d0418f97.js",
    "revision": "db730f86bcc0513cfc1b5caf425596c4"
  },
  {
    "url": "assets/js/app.ac42be43.js",
    "revision": "e6de6cfd01c4b8e9bfc00d57b932ec71"
  },
  {
    "url": "guide/index.html",
    "revision": "221692048dfe09a10e39ff7a859e1242"
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
    "revision": "4e46a719632b65b0eeff770ed8cac914"
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
    "revision": "659f2b9b884eca2505bd19168dbde7ba"
  },
  {
    "url": "resume/index.html",
    "revision": "5d70d68a6ecde6d86ce99b8273c7bdf5"
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
