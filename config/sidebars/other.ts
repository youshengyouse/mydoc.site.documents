export const other={
    '/zh/其它/': [
      {
        text: '正则表达式',
        collapsed: false,
        base: "/zh/其它/正则/",
        items: sidebarRegular()
      }
    ],
  }

function sidebarRegular() {
  return [
    { text: '官方文档', link: 'index' },
    { text: '查找替换', link: '替换' },
  ]
}

