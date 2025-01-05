export const typescriptTutorial={
    '/zh/typescript教程/': [
      {
        text: '阮一峰ts教程',
        collapsed: false,
        base: "/zh/typescript教程/docs/",
        items: sidebarTutorials()
      },
    
    ],
  }

function sidebarTutorials() {
  return [

    { text: '简介', link: 'intro' },
{ text: '基本用法', link: 'basic' },
{ text: 'any 类型', link: 'any' },
{ text: '类型系统', link: 'types' },
{ text: '数组', link: 'array' },
{ text: '元组', link: 'tuple' },
{ text: 'symbol 类型', link: 'symbol' },
{ text: '函数', link: 'function' },
{ text: '对象', link: 'object' },
{ text: 'interface', link: 'interface' },
{ text: '类', link: 'class' },
{ text: '泛型', link: 'generics' },
{ text: 'Enum 类型', link: 'enum' },
{ text: '类型断言', link: 'assert' },
{ text: '模块', link: 'module' },
{ text: 'namespace', link: 'namespace' },
{ text: '装饰器', link: 'decorator' },
{ text: '装饰器（旧语法）', link: 'decorator-legacy' },
{ text: 'declare 关键字', link: 'declare' },
{ text: 'd.ts 类型声明文件', link: 'd.ts' },
{ text: '类型运算符', link: 'operator' },
{ text: '类型映射', link: 'mapping' },
{ text: '类型工具', link: 'utility' },
{ text: '注释指令', link: 'comment' },
{ text: 'tsconfig.json 文件', link: 'tsconfig.json' },
{ text: 'tsc 命令', link: 'tsc' },

  ]
}
