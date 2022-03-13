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
    "revision": "78a15f90cd6617f082375ea2fac42969"
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
    "url": "assets/img/add.69a031a7.png",
    "revision": "69a031a7f3eb781d3a279c8e985b961d"
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
    "url": "assets/img/cloud-build.043a8c4b.png",
    "revision": "043a8c4bff22e2884eca756193c9d3a7"
  },
  {
    "url": "assets/img/cloud-deploy.1ff1d56a.png",
    "revision": "1ff1d56ae7e71baafe13b806d184cbdc"
  },
  {
    "url": "assets/img/cloud-tag.500edfc1.png",
    "revision": "500edfc11050689f751860dd372e4b1b"
  },
  {
    "url": "assets/img/cloud-update.75265d76.png",
    "revision": "75265d766261f09058e3c3a2c62b401e"
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
    "url": "assets/img/demo.1236bd20.gif",
    "revision": "1236bd206121ff3684d5aa3cba48000e"
  },
  {
    "url": "assets/img/doc.5d3520b2.png",
    "revision": "5d3520b299a79d219d4e71c578874133"
  },
  {
    "url": "assets/img/file.e667fe94.png",
    "revision": "e667fe94d5482f7ee363a5adc3526786"
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
    "url": "assets/img/git-commit.607cf323.png",
    "revision": "607cf3234e6062b107d42e13f60291b5"
  },
  {
    "url": "assets/img/git-oss.a13ae329.png",
    "revision": "a13ae329cbbf51d05372c928a5f99803"
  },
  {
    "url": "assets/img/git-set.f9c08741.png",
    "revision": "f9c087416026e1e503600d30e1c708b1"
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
    "url": "assets/img/menu.a1b43337.png",
    "revision": "a1b433377424b2d3e1dc92f9a2d1f9fd"
  },
  {
    "url": "assets/img/operator.63196570.gif",
    "revision": "631965705cd62d55cc59ae226d813041"
  },
  {
    "url": "assets/img/page-add.21e334be.png",
    "revision": "21e334bef9a82bd6324dde6b92a651de"
  },
  {
    "url": "assets/img/page-conflict.4c05aa0d.png",
    "revision": "4c05aa0df6c33562b095aac3e39e0f3a"
  },
  {
    "url": "assets/img/preview.76bb63b1.png",
    "revision": "76bb63b1ad427d101641ecaa1fcf1696"
  },
  {
    "url": "assets/img/property.05b3640e.jpg",
    "revision": "05b3640ee4bf6da07101e23b61deb407"
  },
  {
    "url": "assets/img/publish.e467ec3d.png",
    "revision": "e467ec3d529eb8cb045d64bf2cbf6565"
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
    "url": "assets/img/tag.be7a821c.png",
    "revision": "be7a821cfb1c92854e3f2d6cbdc9b2f7"
  },
  {
    "url": "assets/img/template-1.2339fab1.png",
    "revision": "2339fab1dfe4eea3c6db80a53a7e3b32"
  },
  {
    "url": "assets/img/template-2.3d98c381.png",
    "revision": "3d98c381acd259444aadca2ba32cdc92"
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
    "url": "assets/img/vue2-template.cdb2a8e5.png",
    "revision": "cdb2a8e5e6556853b2b2c2e528400452"
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
    "url": "assets/js/10.38c734ea.js",
    "revision": "3c035b84d12abd2a791d7e22ea32d14b"
  },
  {
    "url": "assets/js/11.b3c595c4.js",
    "revision": "f5b8407e14e51ca86ec0ca75f024ce17"
  },
  {
    "url": "assets/js/12.a8725175.js",
    "revision": "d24a894627031b05b9b480ba8addb352"
  },
  {
    "url": "assets/js/13.d0e8afcf.js",
    "revision": "04d910f0c6eac6427a24e516108298e5"
  },
  {
    "url": "assets/js/14.fbbd01d4.js",
    "revision": "a5ae78385fbde2cc1dbf674223bc2dbb"
  },
  {
    "url": "assets/js/15.da486c89.js",
    "revision": "45bf1066972a87d5c2f2dfc0961ce2b8"
  },
  {
    "url": "assets/js/16.17848412.js",
    "revision": "bb87d718f2f7fb01971bf9975b3965fe"
  },
  {
    "url": "assets/js/17.13881538.js",
    "revision": "866b363a37b124385cba45028879bca5"
  },
  {
    "url": "assets/js/18.1aee597f.js",
    "revision": "fdb096adf5539fa4e3275c79c8b52b2c"
  },
  {
    "url": "assets/js/19.fd001ca2.js",
    "revision": "b2605410ee9ff7b2a06a34ddc2495472"
  },
  {
    "url": "assets/js/2.60a69e2c.js",
    "revision": "20455da27539736c016ac0a34f2e196b"
  },
  {
    "url": "assets/js/20.a2927db8.js",
    "revision": "ef5a49667e76155d312617efe78245c8"
  },
  {
    "url": "assets/js/21.45010446.js",
    "revision": "7d3e20397d57e8a4e7e1f5e8c1656a3d"
  },
  {
    "url": "assets/js/22.50575843.js",
    "revision": "03e3867c07ff47908f050e88f63dde83"
  },
  {
    "url": "assets/js/23.446d4a02.js",
    "revision": "5d7037af52556e5de7bcf26e62dcf457"
  },
  {
    "url": "assets/js/24.4f81ff01.js",
    "revision": "8974fd251d4d94de37bb78e224e6bd56"
  },
  {
    "url": "assets/js/25.e2003dfa.js",
    "revision": "1998b3c8b832d9efb90b495f1ead4c77"
  },
  {
    "url": "assets/js/26.4edd7d6e.js",
    "revision": "5e1577e17d8c7a47f360f3388286e33f"
  },
  {
    "url": "assets/js/27.2952c442.js",
    "revision": "fdfb9daadb919c2420bdfe2c8ac403b3"
  },
  {
    "url": "assets/js/28.6b94d4f8.js",
    "revision": "9274e3ec6962e0b8bc0efbe598076056"
  },
  {
    "url": "assets/js/29.3945d63f.js",
    "revision": "6cf9c30bfbf3b3e1534c255f2a2a9106"
  },
  {
    "url": "assets/js/3.1e00d21a.js",
    "revision": "80c6e23e80da4b222bd7276bef2e1135"
  },
  {
    "url": "assets/js/30.6d3890b9.js",
    "revision": "2289b72c1554082b1782246988efa1f6"
  },
  {
    "url": "assets/js/31.5bebc031.js",
    "revision": "2ca62c6710fa881194e6750eed47cf37"
  },
  {
    "url": "assets/js/32.9362e0a9.js",
    "revision": "752705e559f5130e49f4793af5ae8afb"
  },
  {
    "url": "assets/js/33.6ce3b242.js",
    "revision": "09bf3d979a4137e27db10545b6e2d182"
  },
  {
    "url": "assets/js/34.7f70739d.js",
    "revision": "1634462ddf6b19f003e6e2e6ea142128"
  },
  {
    "url": "assets/js/35.5260f359.js",
    "revision": "12da7d034eea5ea2f5150d21fa54e776"
  },
  {
    "url": "assets/js/36.364cecd9.js",
    "revision": "ea794ce2c80fc7dda33258f665f0d94b"
  },
  {
    "url": "assets/js/37.8ee12518.js",
    "revision": "ba1ea2f195e150795aa18620a141a449"
  },
  {
    "url": "assets/js/38.372e7bbd.js",
    "revision": "68b6f65d22d066902926ac5fe510e4fa"
  },
  {
    "url": "assets/js/39.61e594d4.js",
    "revision": "56fb724a31881427885604295bed6ef6"
  },
  {
    "url": "assets/js/4.3f3e1051.js",
    "revision": "75dd156f167c5f136bb3ca470792f4d9"
  },
  {
    "url": "assets/js/40.8fe2a2da.js",
    "revision": "9656efc9f537e762346cc7e07f215a84"
  },
  {
    "url": "assets/js/41.64a31f78.js",
    "revision": "e518842d609f5d079a5585b852c6191b"
  },
  {
    "url": "assets/js/42.58a9a526.js",
    "revision": "6c42a4dfa92b1f970491f4e549603e14"
  },
  {
    "url": "assets/js/5.2234ec34.js",
    "revision": "0f49118dcade4b080b2986609d7726c3"
  },
  {
    "url": "assets/js/6.2d995cc1.js",
    "revision": "ec02ae16caf4ea6343b2ee5b9fbcd808"
  },
  {
    "url": "assets/js/7.87f2d233.js",
    "revision": "e2bcdfaecb1f33f9332015f778293df5"
  },
  {
    "url": "assets/js/8.d28ea2de.js",
    "revision": "9d21d06a2865464579f8e5f0298748be"
  },
  {
    "url": "assets/js/9.ec44f14b.js",
    "revision": "5d0480222bd0dd676f732ab4001007b5"
  },
  {
    "url": "assets/js/app.d3fcc3d6.js",
    "revision": "96f4f913e0c895fd97c1b4580c183fc2"
  },
  {
    "url": "css/常见布局.html",
    "revision": "8d61d837cced28e0b8a2bc01ad62d437"
  },
  {
    "url": "css/堆叠上下文.html",
    "revision": "9ceb4b3f25a9fd15de5e2a777c70332e"
  },
  {
    "url": "css/移动端.html",
    "revision": "7c45dbec6f5129939389c8b4db123c8c"
  },
  {
    "url": "css/BFC.html",
    "revision": "a4dede193c80fd25b6bc046d1631f1f4"
  },
  {
    "url": "css/Flex.html",
    "revision": "87056621677736eeb40748e8633f996e"
  },
  {
    "url": "css/index.html",
    "revision": "ab5853ea2930cc768a077b905febfea0"
  },
  {
    "url": "ES6/解构赋值.html",
    "revision": "1af11241918df9f6158fc0846bbb21ac"
  },
  {
    "url": "ES6/index.html",
    "revision": "1a2b99b9e0130443f191d3b7b8ce8086"
  },
  {
    "url": "essay/index.html",
    "revision": "a2f0c9dc92ab72a48eb77f55e44b36a6"
  },
  {
    "url": "essay/touzi-2017.html",
    "revision": "87816d5de7498a831cc8aaf818165afa"
  },
  {
    "url": "friends/index.html",
    "revision": "33c36f776eaef2c1be148fc083da284e"
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
    "revision": "da06743f126aecdd1a5f2aeb8bb48c0c"
  },
  {
    "url": "js-cli/开发与调试.html",
    "revision": "5d53ed6d7277df479704577a49fd3890"
  },
  {
    "url": "js-cli/新增模板.html",
    "revision": "a5cdc6ea92fa52c2754c2d372fcaa8bd"
  },
  {
    "url": "js-cli/index.html",
    "revision": "0f88ff9e724f3b64c1c708b27920e85c"
  },
  {
    "url": "JS/array-obj.html",
    "revision": "7a7bfab6ef62a1e4d171ab0364dc0ab3"
  },
  {
    "url": "JS/async.html",
    "revision": "99bc51f239ede098a1b923d22ef8d2e4"
  },
  {
    "url": "JS/date.html",
    "revision": "7ebdd1807285770145fe5cc8d6492c91"
  },
  {
    "url": "JS/index.html",
    "revision": "ee40811c129ba23560a1d1ff29efdad8"
  },
  {
    "url": "JS/JS-web-API.html",
    "revision": "0236a7dd1dd38a4ec7373eadb0c0592e"
  },
  {
    "url": "JS/prototype.html",
    "revision": "a97fd8fc5deb1466a51b1c174a28bcfc"
  },
  {
    "url": "JS/scope.html",
    "revision": "195a5d18571f0f9649fe9894f70a0dfa"
  },
  {
    "url": "JS/variable.html",
    "revision": "a8762ef7fe0e8ab6d3cb11683f9e28c5"
  },
  {
    "url": "koa2/搭建后端环境.html",
    "revision": "8190cd24c4b6c6c359361692401ebfed"
  },
  {
    "url": "koa2/登录功能.html",
    "revision": "4489077aefd28fb195c146d040fde052"
  },
  {
    "url": "koa2/构建前端页面.html",
    "revision": "2b91ee661e1ce78fff7cb773f77c1357"
  },
  {
    "url": "koa2/启动koa服务.html",
    "revision": "8af8d95041781b7cd646ea04691a587a"
  },
  {
    "url": "koa2/实现员工的增删改查.html",
    "revision": "33e145a2fafad02ac9592d6405eddd23"
  },
  {
    "url": "koa2/项目部署.html",
    "revision": "4d2d512965a9d02390a8e8407040de8a"
  },
  {
    "url": "koa2/写在最后.html",
    "revision": "b846ecbf04697e9cb8e73d3ad14bc35e"
  },
  {
    "url": "koa2/index.html",
    "revision": "3c3782705c5365ffe736de65a6c2eb7b"
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
    "url": "material/index.html",
    "revision": "58a79da0bc069a06e253df99c564df96"
  },
  {
    "url": "project/index.html",
    "revision": "8e19ddfe4f399a8cf5cd9e93e57b6b87"
  },
  {
    "url": "resume/index.html",
    "revision": "9cae4be055c186cd2bcbff205bc20d18"
  },
  {
    "url": "vuepress/index.html",
    "revision": "36020b8802e9c4b8864804a12c4edc3f"
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
