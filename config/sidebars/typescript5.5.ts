export const typescript={
    '/zh/typescript5.5/': [
      {
        text: '快速上手',
        collapsed: true,
        base: "/zh/typescript5.5/tutorials/",
        items: sidebarTutorials()
      },
      {
        text: '手册',
        collapsed: false,
        base: "/zh/typescript5.5/handbook/",
        items: sidebarHandbook()
      },

      {
        text: '手册(进阶)',
        collapsed: true,
        base: "/zh/typescript5.5/reference/",
        items: sidebarReference()
      },
      
      {
        text: '手册(v2)',
        collapsed: true,
        base: "/zh/typescript5.5/handbook-v2/",
        items: sidebarHandbook2()
      },
      {
        text: '如何书写声明文件',
        collapsed: true,
        base: "/zh/typescript5.5/declaration-files/",
        items: sidebarDeclaration()
      },
      {
        text: 'TypeScript for JavaScript',
        collapsed: true,
        base: "/zh/typescript5.5/javascript/",
        items: sidebarJavascript()
      },
      {
        text: '工程配置',
        collapsed: true,
        base: "/zh/typescript5.5/project-config/",
        items: sidebarProject()
      },
      {
        text: 'Wiki',
        collapsed: true,
        base: "/zh/typescript5.5/wiki/",
        items: sidebarWiki()
      },
      {
        text: '新增功能',
        collapsed: true,
        base: "/zh/typescript5.5/release-notes/",
        items: sidebarRelease()
      },
      {
        text: '破坏性改动',
        collapsed: true,
        base: "/zh/typescript5.5/breaking-changes/",
        items: sidebarBreak()
      },
    ],
  }

function sidebarTutorials() {
  return [
    { text: '5 分钟了解 TypeScript', link: 'typescript-in-5-minutes' },
    { text: 'ASP.NET Core', link: 'asp.net-core' },
    { text: 'ASP.NET 4', link: 'asp.net-4' },
    { text: 'Gulp', link: 'gulp' },
    { text: 'Knockout.js', link: 'knockout' },
    { text: 'React 与 webpack', link: 'react-and-webpack' },
    { text: 'React', link: 'react' },
    { text: 'Angular 2', link: 'angular-2' },
    { text: '从 JavaScript 迁移到 TypeScript', link: 'migrating-from-javascript' },
  ]
}

function sidebarHandbook() {
  return [
    { text: '基础类型', link: 'basic-types' },
    { text: '接口', link: 'interfaces' },
    { text: '函数', link: 'functions' },
    { text: '字面量类型', link: 'literal-types' },
    { text: '联合类型和交叉类型', link: 'unions-and-intersections' },
    { text: '类', link: 'classes' },
    { text: '枚举', link: 'enums' },
    { text: '泛型', link: 'generics' },
  ]
}

function sidebarReference() {
  return [
    { text: '高级类型', link: 'advanced-types' },
    { text: '实用工具类型', link: 'utility-types' },
    { text: 'Decorators', link: 'decorators' },
    { text: '声明合并', link: 'declaration-merging' },
    { text: 'Iterators 和 Generators', link: 'iterators-and-generators' },
    { text: 'JSX', link: 'jsx' },
    { text: '混入', link: 'mixins' },
    { text: '模块', link: 'modules' },
    { text: '模块解析', link: 'module-resolution' },
    { text: '命名空间', link: 'namespaces' },
    { text: '命名空间和模块', link: 'namespaces-and-modules' },
    { text: 'Symbols', link: 'symbols' },
    { text: '三斜线指令', link: 'triple-slash-directives' },
    { text: '类型兼容性', link: 'type-compatibility' },
    { text: '类型推论', link: 'type-inference' },
    { text: '变量声明', link: 'variable-declarations' },
  ]
}
function sidebarHandbook2() {
  return [
    { text: '模版字面量类型', link: 'type-manipulation/template-literal-types' },
  ]
}
function sidebarDeclaration() {
  return [
    { text: '介绍', link: 'introduction' },
    { text: '举例', link: 'by-example' },
    { text: '库结构', link: 'library-structures' },
    { text: '模板', link: 'templates' },
    { text: '最佳实践', link: 'do-s-and-don-ts' },
    { text: '深入', link: 'deep-dive' },
    { text: '发布', link: 'publishing' },
    { text: '使用', link: 'consumption' },
  ]
}

function sidebarJavascript() {
  return [
    { text: 'JavaScript 文件里的类型检查', link: 'type-checking-javascript-files' },
  ]
}

function sidebarProject() {
  return [
    { text: 'tsconfig.json', link: 'tsconfig.json' },
    { text: '工程引用', link: 'project-references' },
    { text: 'NPM 包的类型', link: 'typings-for-npm-packages' },
    { text: '编译选项', link: 'compiler-options' },
    { text: '配置 Watch', link: 'configuring-watch' },
    { text: '在 MSBuild 里使用编译选项', link: 'compiler-options-in-msbuild' },
    { text: '与其它构建工具整合', link: 'integrating-with-build-tools' },
    { text: '使用 TypeScript 的每日构建版本', link: 'nightly-builds' },
  ]
}

function sidebarWiki() {
  return [
    { text: 'TypeScript 里的 this', link: 'this-in-typescript' },
    { text: '编码规范', link: 'coding_guidelines' },
    { text: '常见编译错误', link: 'common-errors' },
    { text: '支持 TypeScript 的编辑器', link: 'typescript-editor-support' },
    { text: '结合 ASP.NET v5 使用 TypeScript', link: 'using-typescript-with-asp.net-5' },
    { text: '架构概述', link: 'architectural-overview' },
    { text: '发展路线图', link: 'roadmap' },
  ]
}

function sidebarRelease() {
  return [
    { text: 'TypeScript 5.5', link: 'typescript-5.5' },
    { text: 'TypeScript 5.4', link: 'typescript-5.4' },
    { text: 'TypeScript 5.3', link: 'typescript-5.3' },
    { text: 'TypeScript 5.2', link: 'typescript-5.2' },
    { text: 'TypeScript 5.1', link: 'typescript-5.1' },
    { text: 'TypeScript 5.0', link: 'typescript-5.0' },
    { text: 'TypeScript 4.9', link: 'typescript-4.9' },
    { text: 'TypeScript 4.8', link: 'typescript-4.8' },
    { text: 'TypeScript 4.7', link: 'typescript-4.7' },
    { text: 'TypeScript 4.6', link: 'typescript-4.6' },
    { text: 'TypeScript 4.5', link: 'typescript-4.5' },
    { text: 'TypeScript 4.4', link: 'typescript-4.4' },
    { text: 'TypeScript 4.3', link: 'typescript-4.3' },
    { text: 'TypeScript 4.2', link: 'typescript-4.2' },
    { text: 'TypeScript 4.1', link: 'typescript-4.1' },
    { text: 'TypeScript 4.0', link: 'typescript-4.0' },
    { text: 'TypeScript 3.9', link: 'typescript-3.9' },
    { text: 'TypeScript 3.8', link: 'typescript-3.8' },
    { text: 'TypeScript 3.7', link: 'typescript-3.7' },
    { text: 'TypeScript 3.6', link: 'typescript-3.6' },
    { text: 'TypeScript 3.5', link: 'typescript-3.5' },
    { text: 'TypeScript 3.4', link: 'typescript-3.4' },
    { text: 'TypeScript 3.3', link: 'typescript-3.3' },
    { text: 'TypeScript 3.2', link: 'typescript-3.2' },
    { text: 'TypeScript 3.1', link: 'typescript-3.1' },
    { text: 'TypeScript 3.0', link: 'typescript-3.0' },
    { text: 'TypeScript 2.9', link: 'typescript-2.9' },
    { text: 'TypeScript 2.8', link: 'typescript-2.8' },
    { text: 'TypeScript 2.7', link: 'typescript-2.7' },
    { text: 'TypeScript 2.6', link: 'typescript-2.6' },
    { text: 'TypeScript 2.5', link: 'typescript-2.5' },
    { text: 'TypeScript 2.4', link: 'typescript-2.4' },
    { text: 'TypeScript 2.3', link: 'typescript-2.3' },
    { text: 'TypeScript 2.2', link: 'typescript-2.2' },
    { text: 'TypeScript 2.1', link: 'typescript-2.1' },
    { text: 'TypeScript 2.0', link: 'typescript-2.0' },
    { text: 'TypeScript 1.8', link: 'typescript-1.8' },
    { text: 'TypeScript 1.7', link: 'typescript-1.7' },
    { text: 'TypeScript 1.6', link: 'typescript-1.6' },
    { text: 'TypeScript 1.5', link: 'typescript-1.5' },
    { text: 'TypeScript 1.4', link: 'typescript-1.4' },
    { text: 'TypeScript 1.3', link: 'typescript-1.3' },
    { text: 'TypeScript 1.1', link: 'typescript-1.1' },
  ]
}
function sidebarBreak() {
  return [
    { text: 'TypeScript 3.6', link: 'typescript-3.6' },
    { text: 'TypeScript 3.5', link: 'typescript-3.5' },
    { text: 'TypeScript 3.4', link: 'typescript-3.4' },
    { text: 'TypeScript 3.2', link: 'typescript-3.2' },
    { text: 'TypeScript 3.1', link: 'typescript-3.1' },
    { text: 'TypeScript 3.0', link: 'typescript-3.0' },
    { text: 'TypeScript 2.9', link: 'typescript-2.9' },
    { text: 'TypeScript 2.8', link: 'typescript-2.8' },
    { text: 'TypeScript 2.7', link: 'typescript-2.7' },
    { text: 'TypeScript 2.6', link: 'typescript-2.6' },
    { text: 'TypeScript 2.4', link: 'typescript-2.4' },
    { text: 'TypeScript 2.3', link: 'typescript-2.3' },
    { text: 'TypeScript 2.2', link: 'typescript-2.2' },
    { text: 'TypeScript 2.1', link: 'typescript-2.1' },
    { text: 'TypeScript 2.0', link: 'typescript-2.0' },
    { text: 'TypeScript 1.8', link: 'typescript-1.8' },
    { text: 'TypeScript 1.7', link: 'typescript-1.7' },
    { text: 'TypeScript 1.6', link: 'typescript-1.6' },
    { text: 'TypeScript 1.5', link: 'typescript-1.5' },
    { text: 'TypeScript 1.4', link: 'typescript-1.4' },
  ]
}