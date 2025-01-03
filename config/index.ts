import { vitepress } from "./sidebars"

export * from "./sidebars"
export const locales =  {
    en: {
      label: 'English',
      lang: 'en'
    },
    fr:{
      label: 'France',
      lang: 'fr'
    },
    root: {
      label: '中文简体',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      //link: '/zh/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
      link: '/zh'
    }
}


const home={
    vitepress:"zh/vitepress/guide/getting-started",
    vite:"zh/vite/guide/index",
    es6:"zh/es6/readme"
}

export const nav =   [
    { text: 'Guide', link: '/guide' },
    {
      text: 'Vue生态',
      items: [
        {
          // 该部分的标题
          text: 'Vue官方',
          items: [
            { text: 'VitePress', link: home.vitepress},
            { text: 'Vite', link:home.vite }
          ]
        }
      ]
    },
    {
      text: 'JS',
      items: [
        {
          // 也可以省略标题
          items: [
            { text: 'JavaScript', link: '...' },
            { text: 'es6', link: home.es6 },
            { text: 'TypeScript', link: '...' },
            { text: 'Nodejs', link: '...' }
          ]
        }
      ]
    }
  ]

export const sidebar={
  ...vitepress
}
