import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-blog/',
  title: "📔 博客",
  description: "Frontend Blog",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/KarasYe/my-blog/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'EMACScript', link: '/EMACScript/ES2015/introduce' },
      { text: 'Go', link: '/Go/go' }
    ],
    sidebar: [
      {
        text: 'EMACScript',
        items: [
          { text: 'ES2022', link: '/EMACScript/ES2022' },
          { text: 'ES2021', link: '/EMACScript/ES2021' },
          { text: 'ES2020', link: '/EMACScript/ES2020' },
          { text: 'ES2019', link: '/EMACScript/ES2019' },
          { text: 'ES2018', link: '/EMACScript/ES2018' },
          { text: 'ES2017', link: '/EMACScript/ES2017' },
          { text: 'ES2016', link: '/EMACScript/ES2016' },
          {
            text: 'ES2015',
            collapsed: true,
            items: [
              { text: 'Introduce', link: '/EMACScript/ES2015/introduce' },
              { text: 'let-const', link: '/EMACScript/ES2015/let' },
              { text: 'destructuring', link: '/EMACScript/ES2015/destructuring' },
              { text: 'string', link: '/EMACScript/ES2015/string' },
              { text: 'string-methods', link: '/EMACScript/ES2015/string-methods' },
              { text: 'regex', link: '/EMACScript/ES2015/regex' },
              { text: 'number', link: '/EMACScript/ES2015/number' },
              { text: 'function', link: '/EMACScript/ES2015/function' },
              { text: 'array', link: '/EMACScript/ES2015/array' },
              { text: 'object', link: '/EMACScript/ES2015/object' },
              { text: 'object-methods', link: '/EMACScript/ES2015/object-methods' },
              { text: 'operator', link: '/EMACScript/ES2015/operator' },
              { text: 'symbol', link: '/EMACScript/ES2015/symbol' },
              { text: 'set-map', link: '/EMACScript/ES2015/set-map' },
              { text: 'proxy', link: '/EMACScript/ES2015/proxy' },
              { text: 'reflect', link: '/EMACScript/ES2015/reflect' },
              { text: 'promise', link: '/EMACScript/ES2015/promise' },
              { text: 'iterator', link: '/EMACScript/ES2015/iterator' },
              { text: 'generator', link: '/EMACScript/ES2015/generator' },
              { text: 'generator-async', link: '/EMACScript/ES2015/generator-async' },
              { text: 'async', link: '/EMACScript/ES2015/async' },
              { text: 'class', link: '/EMACScript/ES2015/class' },
              { text: 'class-extends', link: '/EMACScript/ES2015/class-extends' },
              { text: 'module', link: '/EMACScript/ES2015/module' },
              { text: 'module-loader', link: '/EMACScript/ES2015/module-loader' },
              { text: 'code-style', link: '/EMACScript/ES2015/code-style' },
              { text: 'spec', link: '/EMACScript/ES2015/spec' },
              { text: 'async-iterator', link: '/EMACScript/ES2015/async-iterator' },
              { text: 'arraybuffer', link: '/EMACScript/ES2015/arraybuffer' },
              { text: 'decorator', link: '/EMACScript/ES2015/decorator' },
              { text: 'proposals', link: '/EMACScript/ES2015/proposals' },
              { text: 'reference', link: '/EMACScript/ES2015/reference' },
            ]
          },
        ]
      },
      {
        text: 'TypeScript',
        items: [
          { text: '前世今生', link: '/TypeScript/introduce'}
        ]
      },
      {
        text: 'Go',
        items: [
          { text: 'Go', link: '/Go/go'},
          { text: '切片', link: '/Go/slice'},
          { text: '函数', link: '/Go/function'},
          { text: '接口', link: '/Go/interface'},
          { text: '通道', link: '/Go/channel'},
          { text: '字典', link: '/Go/map'},
          { text: '指针', link: '/Go/pointer'},
          { text: '结构体', link: '/Go/struct'},
          { text: 'Goroutine', link: '/Go/goroutine'},
          { text: '错误', link: '/Go/error'},
          { text: '标准库', link: '/Go/lib'},
          { text: 'Fiber', link: '/Go/fiber'}
        ]
      },
      {
        text: 'Git',
        items: [
          { text: 'cherry-pick', link: '/Git/cherry-pick'},
          { text: 'stash', link: '/Git/stash'},
          { text: 'revert', link: '/Git/revert'}
        ]
      },
      {
        text: '学习资料',
        items: [
          { text: '30-Days-Of-JavaScrip', link: 'https://github.com/Asabeneh/30-Days-Of-JavaScript'}
        ]
      },
      {
        text: 'Why',
        items: [
          { text: '相对论', link: 'Why/相对论' },
          { text: '量子力学', link: 'Why/量子力学' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KarasYe/my-blog' }
    ]
  }
})
