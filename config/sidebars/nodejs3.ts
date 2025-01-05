export const nodejs3={
    '/zh/nodejs第三方库/': [
        {
            text: '指南',
            collapsed: true,
            base: "/zh/nodejs第三方库/",
            items: sidebarGuide()
        },   
    ],
}

function sidebarGuide() {
return [
    {
    text: '简介',
    collapsed: false,
    items: [
        { text: '什么是 VitePress？', link: 'what-is-vitepress' },
        { text: '快速开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
    ]
    },
    {
    text: '写作',
    collapsed: false,
    items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
    ]
    },
    {
    text: '自定义',
    collapsed: false,
    items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
    ]
    },
    {
    text: '实验性功能',
    collapsed: false,
    items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
    ]
    },
    { text: '配置和 API 参考', base: '/zh/vitepress/reference/', link: 'site-config' }
]
}
  