const home={
    vitepress:"zh/vitepress/guide/getting-started",
    vite:"zh/vite/guide/index",
    es6:"zh/es6/readme",
    typescript:"zh/typescript5.5/PREFACE",
    nodejs3:"zh/nodejs第三方库/目录",
    markdown:"zh/其它/markdown/index",
    ts:"zh/typescript教程/README",
    regular:"zh/其它/正则/index",
}
export const nav =   [
    { text: 'Guide', link: '/guide' },
    {
      text: 'Vue系列',
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
      text: 'JS系列',
      items: [
        {
          items: [
            { text: 'es6', link: home.es6 },
            { text: 'TypeScript', link: home.typescript},
            { text: 'JavaScript官方文档', link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",target:"_blank"},
            { text: 'Nodejs官方文档', link: "https://nodejs.cn/api/v23/index.html",target:"_blank"},
            { text: 'Nodejs第三方库', link: home.nodejs3},
            { text: 'TypeScript官方文档', link: "https://www.typescriptlang.org/docs/",target:"_blank"},
            { text: 'TypeScript教程', link: home.ts},
          ]
        }
      ]
    },
    {
      text: '其它',
      items: [
        {
          items: [
            { text: 'markdown教程', link: home.markdown },
            { text: '正则', link: home.regular },
          ]
        }
      ]
    }
  ]