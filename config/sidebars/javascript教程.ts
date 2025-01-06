export const javascript教程={
    '/zh/javascript教程/': [
      {
        text: '入门篇',
        collapsed: true,
        base: "/zh/javascript教程/docs/basic/",
        items: sidebarBasic()
      },
      {
        text: '数据类型',
        collapsed: true,
        base: "/zh/javascript教程/docs/types/",
        items: sidebarTypes()
      },
      {
        text: '运算符',
        collapsed: true,
        base: "/zh/javascript教程/docs/operators/",
        items: sidebarOperators()
      },
      {
        text: '语法专题',
        collapsed: true,
        base: "/zh/javascript教程/docs/features/",
        items: sidebarFeatures()
      },
      {
        text: '标准库',
        collapsed: true,
        base: "/zh/javascript教程/docs/stdlib/",
        items: sidebarStdlib()
      },
      {
        text: '面向对象编程',
        collapsed: true,
        base: "/zh/javascript教程/docs/oop/",
        items: sidebarOop()
      },
      {
        text: '异步操作',
        collapsed: true,
        base: "/zh/javascript教程/docs/async/",
        items: sidebarAsync()
      },

      {
        text: 'DOM',
        collapsed: true,
        base: "/zh/javascript教程/docs/dom/",
        items: sidebarDom()
      },
      {
        text: '事件',
        collapsed: true,
        base: "/zh/javascript教程/docs/events/",
        items: sidebarEvents()
      },
      {
        text: '浏览器模型',
        collapsed: true,
        base: "/zh/javascript教程/docs/bom/",
        items: sidebarBom()
      },
      {
        text: '附录：网页元素接口',
        collapsed: true,
        base: "/zh/javascript教程/docs/elements/",
        items: sidebarElements()
      },
    ]
  }

function sidebarBasic() {
  return [
    { text: '导论', link: 'introduction' },
    { text: '历史', link: 'history' },
    { text: '基本语法', link: 'grammar' },

  ]
}
function sidebarTypes() {
  return [
    { text: '概述', link: 'general' },
    { text: 'null，undefined 和布尔值', link: 'null-undefined-boolean' },
    { text: '数值', link: 'number' },
    { text: '字符串', link: 'string' },
    { text: '对象', link: 'object' },
    { text: '函数', link: 'function' },
    { text: '数组', link: 'array' },
  ]
}

function sidebarOperators() {
  return [
    { text: '算术运算符', link: 'arithmetic' },
    { text: '比较运算符', link: 'comparison' },
    { text: '布尔运算符', link: 'boolean' },
    { text: '二进制位运算符', link: 'bit' },
    { text: '其他运算符，运算顺序', link: 'priority' },
  ]
}

function sidebarFeatures() {
  return [
    { text: '数据类型的转换', link: 'conversion' },
    { text: '错误处理机制', link: 'error' },
    { text: '编程风格', link: 'style' },
    { text: 'console 对象与控制台', link: 'console' },
  ]
}

function sidebarStdlib() {
  return [
    { text: 'Object 对象', link: 'object' },
    { text: '属性描述对象', link: 'attributes' },
    { text: 'Array 对象', link: 'array' },
    { text: '包装对象', link: 'wrapper' },
    { text: 'Boolean 对象', link: 'boolean' },
    { text: 'Number 对象', link: 'number' },
    { text: 'String 对象', link: 'string' },
    { text: 'Math 对象', link: 'math' },
    { text: 'Date 对象', link: 'date' },
    { text: 'RegExp 对象', link: 'regexp' },
    { text: 'JSON 对象', link: 'json' },
  ]
}
function sidebarOop() {
  return [
    { text: '实例对象与 new 命令', link: 'new' },
    { text: 'this 关键字', link: 'this' },
    { text: '对象的继承', link: 'prototype' },
    { text: 'Object 对象的相关方法', link: 'object' },
    { text: '严格模式', link: 'strict' },
  ]
}



function sidebarAsync() {
  return [
    { text: '概述', link: 'general' },
    { text: '定时器', link: 'timer' },
    { text: 'Promise 对象', link: 'promise' },
  ]
}

function sidebarDom() {
  return [
    { text: '概述', link: 'general' },
    { text: 'Node 接口', link: 'node' },
    { text: 'NodeList 接口，HTMLCollection 接口', link: 'nodelist' },
    { text: 'ParentNode 接口，ChildNode 接口', link: 'parentnode' },
    { text: 'Document 节点', link: 'document' },
    { text: 'Element 节点', link: 'element' },
    { text: '属性的操作', link: 'attributes' },
    { text: 'Text 节点和 DocumentFragment 节点', link: 'text' },
    { text: 'CSS 操作', link: 'css' },
    { text: 'Mutation Observer API', link: 'mutationobserver' },
  ]
}
function sidebarEvents() {
  return [
    { text: 'EventTarget 接口', link: 'eventtarget' },
    { text: '事件模型', link: 'model' },
    { text: 'Event 对象', link: 'event' },
    { text: '鼠标事件', link: 'mouse' },
    { text: '键盘事件', link: 'keyboard' },
    { text: '进度事件', link: 'progress' },
    { text: '表单事件', link: 'form' },
    { text: '触摸事件', link: 'touch' },
    { text: '拖拉事件', link: 'drag' },
    { text: '其他常见事件', link: 'common' },
    { text: 'GlobalEventHandlers 接口', link: 'globaleventhandlers' },
  ]
}
function sidebarBom() {
  return [
    { text: '浏览器模型概述', link: 'engine' },
    { text: 'window 对象', link: 'window' },
    { text: 'Navigator 对象，Screen 对象', link: 'navigator' },
    { text: 'Cookie', link: 'cookie' },
    { text: 'XMLHttpRequest 对象', link: 'xmlhttprequest' },
    { text: '同源限制', link: 'same-origin' },
    { text: 'CORS 通信', link: 'cors' },
    { text: 'Storage 接口', link: 'storage' },
    { text: 'History 对象', link: 'history' },
    { text: 'Location 对象，URL 对象，URLSearchParams 对象', link: 'location' },
    { text: 'ArrayBuffer 对象，Blob 对象', link: 'arraybuffer' },
    { text: 'File 对象，FileList 对象，FileReader 对象', link: 'file' },
    { text: '表单，FormData 对象', link: 'form' },
    { text: 'IndexedDB API', link: 'indexeddb' },
    { text: 'Web Worker', link: 'webworker' },
  ]
}

function sidebarElements() {
  return [
    { text: '&lt;a&gt;', link: 'a' },
    { text: '&lt;img&gt;', link: 'image' },
    { text: '&lt;form&gt;', link: 'form' },
    { text: '&lt;input&gt;', link: 'input' },
    { text: '&lt;button&gt;', link: 'button' },
    { text: '&lt;option&gt;', link: 'option' },
    { text: '&lt;video&gt;，&lt;audio&gt;', link: 'video' },

  ]
}
