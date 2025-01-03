export const vitepress={
    '/zh/vitepress/': [
      {
        text: '指南',
        collapsed: true,
        base: "/zh/vitepress/guide/",
        items: sidebarGuide()
      },
      {
        text: '手册',
        collapsed: true,
        base: "/zh/vitepress/reference/",
        items: sidebarReference() 
      }
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
  
  function sidebarReference() {
    return [
      {
        text: '参考',
        items: [
          { text: '站点配置', link: 'site-config' },
          { text: 'frontmatter 配置', link: 'frontmatter-config' },
          { text: '运行时 API', link: 'runtime-api' },
          { text: 'CLI', link: 'cli' },
          {
            text: '默认主题',
            base: '/zh/vitepress/reference/default-theme-',
            items: [
              { text: '概览', link: 'config' },
              { text: '导航栏', link: 'nav' },
              { text: '侧边栏', link: 'sidebar' },
              { text: '主页', link: 'home-page' },
              { text: '页脚', link: 'footer' },
              { text: '布局', link: 'layout' },
              { text: '徽章', link: 'badge' },
              { text: '团队页', link: 'team-page' },
              { text: '上下页链接', link: 'prev-next-links' },
              { text: '编辑链接', link: 'edit-link' },
              { text: '最后更新时间戳', link: 'last-updated' },
              { text: '搜索', link: 'search' },
              { text: 'Carbon Ads', link: 'carbon-ads' }
            ]
          }
        ]
      }
    ]
  }