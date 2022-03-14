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
    "revision": "b1db9dc9662d21bd72781b8cfc7cd9c8"
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
    "url": "assets/img/coverImage.f3683024.png",
    "revision": "f36830242a4d40eb14b2be914214ba74"
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
    "url": "assets/js/10.86098aa0.js",
    "revision": "7a16c182b7366d437b920ef9d4fd1482"
  },
  {
    "url": "assets/js/11.822b3671.js",
    "revision": "bbe96a92698b9c090567532cf6feeb2c"
  },
  {
    "url": "assets/js/12.eff3e382.js",
    "revision": "a1b485ea699104a54c4b9f1b13af5ec1"
  },
  {
    "url": "assets/js/13.7d70d8ee.js",
    "revision": "8ca184b0b4eea83b6245fc3c9b6f948e"
  },
  {
    "url": "assets/js/14.92682225.js",
    "revision": "bc53d60478bcc50e7b78564bc712b117"
  },
  {
    "url": "assets/js/15.fa351a0c.js",
    "revision": "968ae94b9907e42c98fc16a6230c88af"
  },
  {
    "url": "assets/js/16.099c24a8.js",
    "revision": "6b639493bc8be3273d44e8b7016af557"
  },
  {
    "url": "assets/js/17.54d4624c.js",
    "revision": "4caaff1666181902b06e7fc1a36a6bda"
  },
  {
    "url": "assets/js/18.a798d32d.js",
    "revision": "1df1e695caffd5a6dadc3440c0431150"
  },
  {
    "url": "assets/js/19.129cc470.js",
    "revision": "645f6017705986209217d685a4766abe"
  },
  {
    "url": "assets/js/2.86671cdf.js",
    "revision": "d1a89114481f9be6b5ab018f09828e25"
  },
  {
    "url": "assets/js/20.725f29cc.js",
    "revision": "18735f0c5da2e79fa0f0e7ac0dea381c"
  },
  {
    "url": "assets/js/21.e0b0aabe.js",
    "revision": "be171a81a037b772266c069785d8dd9c"
  },
  {
    "url": "assets/js/22.d38c23a9.js",
    "revision": "d891f1ce943770982d5660a20227bca7"
  },
  {
    "url": "assets/js/23.2a8a85fe.js",
    "revision": "dd9747c7362aed01666dee827d34b058"
  },
  {
    "url": "assets/js/24.0ae907ec.js",
    "revision": "02eb778e246fdc9ba4eaaf48bf718c69"
  },
  {
    "url": "assets/js/25.9c4832fb.js",
    "revision": "d3e7cdc526f73a0a779a5053c0912542"
  },
  {
    "url": "assets/js/26.485e3694.js",
    "revision": "a58ed278e9fb2710e8535f09c2f559af"
  },
  {
    "url": "assets/js/27.477829a3.js",
    "revision": "a4c40f00b7abab2759305628e0b237c6"
  },
  {
    "url": "assets/js/28.e7d9065f.js",
    "revision": "1290320f10ebf0820a06b2e32bac43ed"
  },
  {
    "url": "assets/js/29.8c7f8f5d.js",
    "revision": "7f4705df12fe1438e972dc0806bd700a"
  },
  {
    "url": "assets/js/3.0caab080.js",
    "revision": "a92cdadf25bb072b011ef74b5dc90448"
  },
  {
    "url": "assets/js/30.cee47b27.js",
    "revision": "7e5d81cf197d1f8ee697f4ea3a6ac66f"
  },
  {
    "url": "assets/js/31.7c3bd45e.js",
    "revision": "96db4e6219ae3ee73ccfc29679e4090f"
  },
  {
    "url": "assets/js/32.6fe0ef12.js",
    "revision": "85767a5d86882a3cf0b9dadc5d2e1adb"
  },
  {
    "url": "assets/js/33.4765629e.js",
    "revision": "d323ca1e2f4384756469d05e894864bf"
  },
  {
    "url": "assets/js/34.f815ee86.js",
    "revision": "59926f8ac56040b53ba9219b571a9ee0"
  },
  {
    "url": "assets/js/35.0a96ed59.js",
    "revision": "c26e7942d03e13498f51f868769d646d"
  },
  {
    "url": "assets/js/36.cde069ea.js",
    "revision": "5e4eb8cd957c56314559c18fbbd540af"
  },
  {
    "url": "assets/js/37.d232fecd.js",
    "revision": "d300d9f4071d217170bde4126e4483ce"
  },
  {
    "url": "assets/js/38.3b4b7130.js",
    "revision": "b405969c33f4b034c17a5312ed50559a"
  },
  {
    "url": "assets/js/39.5226c59f.js",
    "revision": "d757bd4a9211176d1dd3b2ff42aa3fe5"
  },
  {
    "url": "assets/js/4.00ccf4fe.js",
    "revision": "6e6ee09f573a6a9d9716ea74c408f8f7"
  },
  {
    "url": "assets/js/40.2fb65380.js",
    "revision": "62f0735916efc97f74b5fbc8654bf9db"
  },
  {
    "url": "assets/js/41.0236eb4b.js",
    "revision": "8fe143ade438795df534237be952912d"
  },
  {
    "url": "assets/js/42.112a188f.js",
    "revision": "2b56b26c38af0a8a86ead7853aceeaba"
  },
  {
    "url": "assets/js/5.02970db1.js",
    "revision": "44d15396fbd29cb5d37cc0b0dfc97748"
  },
  {
    "url": "assets/js/6.bd367c89.js",
    "revision": "891bd610c20dd13e191ed44940e84878"
  },
  {
    "url": "assets/js/7.788a7119.js",
    "revision": "d55c1a24699fd0c7d9ce0aa2d706ac34"
  },
  {
    "url": "assets/js/8.f73ebcf0.js",
    "revision": "bbd8fb778944900436dad829dee885c4"
  },
  {
    "url": "assets/js/9.66b5a5d2.js",
    "revision": "b5394e4b740e1aa83cb0bf5f589ca8bd"
  },
  {
    "url": "assets/js/app.0520fef4.js",
    "revision": "e16ab4a21798eabac578d73bef0c38c6"
  },
  {
    "url": "css/常见布局.html",
    "revision": "24f0336d9349712e02f98d912016b963"
  },
  {
    "url": "css/堆叠上下文.html",
    "revision": "1ea57d95a8931347ec355efc72b0b466"
  },
  {
    "url": "css/移动端.html",
    "revision": "71fc432742ce839062830eb24b47c6ea"
  },
  {
    "url": "css/BFC.html",
    "revision": "3ec37177f2e3139bf2d22d389be7d0be"
  },
  {
    "url": "css/Flex.html",
    "revision": "23dcf793cc775acc456e7b5f93696eb4"
  },
  {
    "url": "css/index.html",
    "revision": "1099f1f349438eab5d844eaa5e2fa155"
  },
  {
    "url": "ES6/解构赋值.html",
    "revision": "444a5aa8085435c64c29af5a09f26274"
  },
  {
    "url": "ES6/index.html",
    "revision": "0da692ca278be0e443261f415869ea6d"
  },
  {
    "url": "essay/index.html",
    "revision": "010eb68bc18b9daad3d177b52bace91b"
  },
  {
    "url": "essay/touzi-2017.html",
    "revision": "36d1211ed13bdb407d4143f391e33b0b"
  },
  {
    "url": "friends/index.html",
    "revision": "dc41c5bb37228a3b4e9e5406e60b3872"
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
    "revision": "82c99aa20b9750afc84395b630999e40"
  },
  {
    "url": "js-cli/开发与调试.html",
    "revision": "5f9e2b16d4eca7dac27224b9fb62d263"
  },
  {
    "url": "js-cli/新增模板.html",
    "revision": "eab45c35cdb18d224c15a2519b3a6807"
  },
  {
    "url": "js-cli/index.html",
    "revision": "4834b8552b7d249417e640ae389cd625"
  },
  {
    "url": "JS/array-obj.html",
    "revision": "ff9bc3d85d2a2264be3140e10cefff56"
  },
  {
    "url": "JS/async.html",
    "revision": "8f96d415bd06d7907921967aedef3519"
  },
  {
    "url": "JS/date.html",
    "revision": "42d19104cbfb6871840fefa468c2274a"
  },
  {
    "url": "JS/index.html",
    "revision": "2bd8edbc7f5d433b1f0001aad2fe7983"
  },
  {
    "url": "JS/JS-web-API.html",
    "revision": "d1b3b0995fc4f6b4051166ac242735dd"
  },
  {
    "url": "JS/prototype.html",
    "revision": "e2f2d00ac0ca3d316299f07a8fbec877"
  },
  {
    "url": "JS/scope.html",
    "revision": "fb42416582218ecd376e65ecdbc642f8"
  },
  {
    "url": "JS/variable.html",
    "revision": "fe661459089305c62d1b19621cf09cc8"
  },
  {
    "url": "koa2/搭建后端环境.html",
    "revision": "a7cc44e76e5b354001d9a0d0bc750e44"
  },
  {
    "url": "koa2/登录功能.html",
    "revision": "37b0dd037b8bbbd829d99e1508699176"
  },
  {
    "url": "koa2/构建前端页面.html",
    "revision": "8d8dac9142fcfeefc08042c3c8a47e30"
  },
  {
    "url": "koa2/启动koa服务.html",
    "revision": "6e705f9dc2c604962cb10b3a5c1c044b"
  },
  {
    "url": "koa2/实现员工的增删改查.html",
    "revision": "5917786dc95d27b1241f8258ab27a58d"
  },
  {
    "url": "koa2/项目部署.html",
    "revision": "2063b76f45107d00947f559201f289b2"
  },
  {
    "url": "koa2/写在最后.html",
    "revision": "1e1c2836090c0ab8aa2899f1aa577ada"
  },
  {
    "url": "koa2/index.html",
    "revision": "708b8d46f1e5a6affcf82edd03e720ee"
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
    "revision": "2a4903f0cc918684c534aef7446dfe0a"
  },
  {
    "url": "project/index.html",
    "revision": "6384a373c524faa4f97e80b498187007"
  },
  {
    "url": "resume/index.html",
    "revision": "9e8acb192b4b5d05b55e5d24b599e02e"
  },
  {
    "url": "vuepress/index.html",
    "revision": "13bc03fe166681ae0a347b562c43e548"
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
