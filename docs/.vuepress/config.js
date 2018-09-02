module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'GongJS',
      description: 'Talk is cheap. Show me the code.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'gongjs/Vue_Blog',
    editLinks: false,
    docsDir: 'docs',
    locales: {
      '/': {
        nav: [
          {
            text: 'Blog',
            items: [
              { text: 'vuepress', link: '/vuepress/' },
              { text: 'koa2', link: '/koa2/' },
            ]
          },
          {
            text: 'Project',
            link: '/project/'
          },
          {
            text: 'Resume',
            link: '/resume/'
          },
          {
            text: 'Friends',
            link: '/friends/'
          }
        ],
        sidebar: {
          '/vuepress/': genSidebarConfig('指南')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title:'手摸手教你用VuePress打造个人Blog',
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
