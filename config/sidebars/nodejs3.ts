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
    text: '文件处理',
    collapsed: false,
    items: [
        { text: 'tinyglobby', link: 'tinyglobby' },
        { text: 'fast-glob', link: 'fast-glob' },
        { text: 'fs-extra', link: 'fs-extra' },
    ]
    },
]
}
  