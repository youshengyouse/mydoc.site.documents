export const es6={
    '/zh/es6/': [
      {
        text: 'ECMAScript 6 教程',
        collapsed: false,
        base: "/zh/es6/",
        items: sidebarTutorial()
      }
    ],

   
  }

  function sidebarTutorial() {
    return [
      { text: 'ECMAScript 6 简介', link: 'intro' },
{ text: 'let 和 const 命令', link: 'let' },
{ text: '变量的解构赋值', link: 'destructuring' },
{ text: '字符串的扩展', link: 'string' },
{ text: '字符串的新增方法', link: 'string-methods' },
{ text: '正则的扩展', link: 'regex' },
{ text: '数值的扩展', link: 'number' },
{ text: '函数的扩展', link: 'function' },
{ text: '数组的扩展', link: 'array' },
{ text: '对象的扩展', link: 'object' },
{ text: '对象的新增方法', link: 'object-methods' },
{ text: '运算符的扩展', link: 'operator' },
{ text: 'Symbol', link: 'symbol' },
{ text: 'Set 和 Map 数据结构', link: 'set-map' },
{ text: 'Proxy', link: 'proxy' },
{ text: 'Reflect', link: 'reflect' },
{ text: 'Promise 对象', link: 'promise' },
{ text: 'Iterator 和 for...of 循环', link: 'iterator' },
{ text: 'Generator 函数的语法', link: 'generator' },
{ text: 'Generator 函数的异步应用', link: 'generator-async' },
{ text: 'async 函数', link: 'async' },
{ text: 'Class 的基本语法', link: 'class' },
{ text: 'Class 的继承', link: 'class-extends' },
{ text: 'Module 的语法', link: 'module' },
{ text: 'Module 的加载实现', link: 'module-loader' },
{ text: '编程风格', link: 'style' },
{ text: '读懂规格', link: 'spec' },
{ text: '异步遍历器', link: 'async-iterator' },
{ text: 'ArrayBuffer', link: 'arraybuffer' },
{ text: '最新提案', link: 'proposals' },
{ text: 'Decorator', link: 'decorator' },
{ text: '参考链接', link: 'reference' },
    ]
  }
  
 