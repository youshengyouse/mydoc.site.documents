<?php
$root = '/docs/typescript5.5/';
$rootHandbook = '/docs/typescript5.5/handbook/';
$rootTutorials = '/docs/typescript5.5/tutorials/';
$reference = '/docs/typescript5.5/reference/';
$typemanipulation = '/docs/typescript5.5/handbook-v2/type-manipulation/';
$declarationfiles = '/docs/typescript5.5/declaration-files/';
$javascript = '/docs/typescript5.5/javascript/';
$rootProjectConfig = '/docs/typescript5.5/project-config/';
$rootReleaseNotes = '/docs/typescript5.5/release-notes/';
$rootBreakingChanges= '/docs/typescript5.5/breaking-changes/';


return [
    "前言"=>['root' => $root . 'PREFACE'],
    '快速上手' => [
        'children' => [
            '1.1 5 分钟了解 TypeScript' => ['root' => $rootTutorials . 'typescript-in-5-minutes'],
            '1.2 ASP.NET Core' => ['root' => $rootTutorials . 'asp.net-core'],
            '1.3 ASP.NET 4 ' => ['root' => $rootTutorials . 'asp.net-4'],
            '1.4 Gulp' => ['root' => $rootTutorials . 'gulp'],
            '1.5 Knockout.js' => ['root' => $rootTutorials . 'knockout'],
            '1.6 React 与 webpack' => ['root' => $rootTutorials . 'react-and-webpack'],
            '1.7 React' => ['root' => $rootTutorials . 'react'],
            '1.8 Angular 2' => ['root' => $rootTutorials . 'angular-2'],
            '1.9 从 JavaScript 迁移到 TypeScript' => ['root' => $rootTutorials . 'migrating-from-javascript  '],
        ]
    ],


    '手册' => [
        'children' => [
            '2.1 基础类型' => ['root' => $rootHandbook . 'basic-types'],
            '2.2 接口' => ['root' => $rootHandbook . 'interfaces'],
            '2. 手册'=>  ['root' => $rootHandbook . 'index'],
            '2.1. 基础类型'=>  ['root' => $rootHandbook . 'basic-types'],
            '2.2. 接口'=>  ['root' => $rootHandbook . 'interfaces'],
            '2.3. 函数'=>  ['root' => $rootHandbook . 'functions'],
            '2.4. 字面量类型'=>  ['root' => $rootHandbook . 'literal-types'],
            '2.5. 联合类型和交叉类型'=>  ['root' => $rootHandbook . 'unions-and-intersections'],
            '2.6. 类'=>  ['root' => $rootHandbook . 'classes'],
            '2.7. 枚举'=>  ['root' => $rootHandbook . 'enums'],
            '2.8. 泛型'=>  ['root' => $rootHandbook . 'generics'],
        ]
    ],

    '手册（进阶）'=>[
        'children' => [
            '3. 手册（进阶）'=>  ['root' => $reference . 'index'],
            '3.1. 高级类型'=>  ['root' => $reference . 'advanced-types'],
            '3.2. 实用工具类型'=>  ['root' => $reference . 'utility-types'],
            '3.3. Decorators'=>  ['root' => $reference . 'decorators'],
            '3.4. 声明合并'=>  ['root' => $reference . 'declaration-merging'],
            '3.5. Iterators 和 Generators'=>  ['root' => $reference . 'iterators-and-generators'],
            '3.6. JSX'=>  ['root' => $reference . 'jsx'],
            '3.7. 混入'=>  ['root' => $reference . 'mixins'],
            '3.8. 模块'=>  ['root' => $reference . 'modules'],
            '3.9. 模块解析'=>  ['root' => $reference . 'module-resolution'],
            '3.10. 命名空间'=>  ['root' => $reference . 'namespaces'],
            '3.11. 命名空间和模块'=>  ['root' => $reference . 'namespaces-and-modules'],
            '3.12. Symbols'=>  ['root' => $reference . 'symbols'],
            '3.13. 三斜线指令'=>  ['root' => $reference . 'triple-slash-directives'],
            '3.14. 类型兼容性'=>  ['root' => $reference . 'type-compatibility'],
            '3.15. 类型推论'=>  ['root' => $reference . 'type-inference'],
            '3.16. 变量声明'=>  ['root' => $reference . 'variable-declarations'],
        ]
    ],
    '手册（v2'=>[
        'children' => [
            '4.1. 模版字面量类型'=>  ['root' => $typemanipulation . 'type-manipulation/template-literal-types'],



        ]
    ],
    '如何书写声明文件'=>[
        'children' => [
            '5. 如何书写声明文件'=>  ['root' => $declarationfiles . 'index'],
            '5.1. 介绍'=>  ['root' => $declarationfiles . 'introduction'],
            '5.2. 举例'=>  ['root' => $declarationfiles . 'by-example'],
            '5.3. 库结构'=>  ['root' => $declarationfiles . 'library-structures'],
            '5.4. 模板'=>  ['root' => $declarationfiles . 'templates'],
            '5.5. 最佳实践'=>  ['root' => $declarationfiles . 'do-s-and-don-ts'],
            '5.6. 深入'=>  ['root' => $declarationfiles . 'deep-dive'],
            '5.7. 发布'=>  ['root' => $declarationfiles . 'publishing'],
            '5.8. 使用'=>  ['root' => $declarationfiles . 'consumption'],
        ]
    ],
    '6. JavaScript 文件里的类型检查'=>  ['root' => $javascript . 'type-checking-javascript-files'],
    '工程配置'=>[
        'children' => [
            '7. 工程配置'=>  ['root' => $rootProjectConfig . 'index'],
            '7.1. tsconfig.json'=>  ['root' => $rootProjectConfig . 'tsconfig.json'],
            '7.2. 工程引用'=>  ['root' => $rootProjectConfig . 'project-references'],
            '7.3. NPM 包的类型'=>  ['root' => $rootProjectConfig . 'typings-for-npm-packages'],
            '7.4. 编译选项'=>  ['root' => $rootProjectConfig . 'compiler-options'],
            '7.5. 配置 Watch'=>  ['root' => $rootProjectConfig . 'configuring-watch'],
            '7.6. 在 MSBuild 里使用编译选项'=>  ['root' => $rootProjectConfig . 'compiler-options-in-msbuild'],
            '7.7. 与其它构建工具整合'=>  ['root' => $rootProjectConfig . 'integrating-with-build-tools'],
            '7.8. 使用 TypeScript 的每日构建版本'=>  ['root' => $rootProjectConfig . 'nightly-builds'],
        ]
    ],
    '新增功能'=>[
        'children' => [
            '8. 新增功能'=>  ['root' => $rootReleaseNotes . 'index'],
            '8.1. TypeScript 5.4'=>  ['root' => $rootReleaseNotes . 'typescript-5.4'],
            '8.2. TypeScript 5.3'=>  ['root' => $rootReleaseNotes . 'typescript-5.3'],
            '8.3. TypeScript 5.2'=>  ['root' => $rootReleaseNotes . 'typescript-5.2'],
            '8.4. TypeScript 5.1'=>  ['root' => $rootReleaseNotes . 'typescript-5.1'],
            '8.5. TypeScript 5.0'=>  ['root' => $rootReleaseNotes . 'typescript-5.0'],
            '8.6. TypeScript 4.9'=>  ['root' => $rootReleaseNotes . 'typescript-4.9'],
            '8.7. TypeScript 4.8'=>  ['root' => $rootReleaseNotes . 'typescript-4.8'],
            '8.8. TypeScript 4.7'=>  ['root' => $rootReleaseNotes . 'typescript-4.7'],
            '8.9. TypeScript 4.6'=>  ['root' => $rootReleaseNotes . 'typescript-4.6'],
            '8.10. TypeScript 4.5'=>  ['root' => $rootReleaseNotes . 'typescript-4.5'],
            '8.11. TypeScript 4.4'=>  ['root' => $rootReleaseNotes . 'typescript-4.4'],
            '8.12. TypeScript 4.3'=>  ['root' => $rootReleaseNotes . 'typescript-4.3'],
            '8.13. TypeScript 4.2'=>  ['root' => $rootReleaseNotes . 'typescript-4.2'],
            '8.14. TypeScript 4.1'=>  ['root' => $rootReleaseNotes . 'typescript-4.1'],
            '8.15. TypeScript 4.0'=>  ['root' => $rootReleaseNotes . 'typescript-4.0'],
            '8.16. TypeScript 3.9'=>  ['root' => $rootReleaseNotes . 'typescript-3.9'],
            '8.17. TypeScript 3.8'=>  ['root' => $rootReleaseNotes . 'typescript-3.8'],
            '8.18. TypeScript 3.7'=>  ['root' => $rootReleaseNotes . 'typescript-3.7'],
            '8.19. TypeScript 3.6'=>  ['root' => $rootReleaseNotes . 'typescript-3.6'],
            '8.20. TypeScript 3.5'=>  ['root' => $rootReleaseNotes . 'typescript-3.5'],
            '8.21. TypeScript 3.4'=>  ['root' => $rootReleaseNotes . 'typescript-3.4'],
            '8.22. TypeScript 3.3'=>  ['root' => $rootReleaseNotes . 'typescript-3.3'],
            '8.23. TypeScript 3.2'=>  ['root' => $rootReleaseNotes . 'typescript-3.2'],
            '8.24. TypeScript 3.1'=>  ['root' => $rootReleaseNotes . 'typescript-3.1'],
            '8.25. TypeScript 3.0'=>  ['root' => $rootReleaseNotes . 'typescript-3.0'],
            '8.26. TypeScript 2.9'=>  ['root' => $rootReleaseNotes . 'typescript-2.9'],
            '8.27. TypeScript 2.8'=>  ['root' => $rootReleaseNotes . 'typescript-2.8'],
            '8.28. TypeScript 2.7'=>  ['root' => $rootReleaseNotes . 'typescript-2.7'],
            '8.29. TypeScript 2.6'=>  ['root' => $rootReleaseNotes . 'typescript-2.6'],
            '8.30. TypeScript 2.5'=>  ['root' => $rootReleaseNotes . 'typescript-2.5'],
            '8.31. TypeScript 2.4'=>  ['root' => $rootReleaseNotes . 'typescript-2.4'],
            '8.32. TypeScript 2.3'=>  ['root' => $rootReleaseNotes . 'typescript-2.3'],
            '8.33. TypeScript 2.2'=>  ['root' => $rootReleaseNotes . 'typescript-2.2'],
            '8.34. TypeScript 2.1'=>  ['root' => $rootReleaseNotes . 'typescript-2.1'],
            '8.35. TypeScript 2.0'=>  ['root' => $rootReleaseNotes . 'typescript-2.0'],
            '8.36. TypeScript 1.8'=>  ['root' => $rootReleaseNotes . 'typescript-1.8'],
            '8.37. TypeScript 1.7'=>  ['root' => $rootReleaseNotes . 'typescript-1.7'],
            '8.38. TypeScript 1.6'=>  ['root' => $rootReleaseNotes . 'typescript-1.6'],
            '8.39. TypeScript 1.5'=>  ['root' => $rootReleaseNotes . 'typescript-1.5'],
            '8.40. TypeScript 1.4'=>  ['root' => $rootReleaseNotes . 'typescript-1.4'],
            '8.41. TypeScript 1.3'=>  ['root' => $rootReleaseNotes . 'typescript-1.3'],
            '8.42. TypeScript 1.1'=>  ['root' => $rootReleaseNotes . 'typescript-1.1'],
        ]
    ],

    '破坏性改动（Breaking Changes）'=>[
        'children' => [
        '9. Breaking Changes'=>  ['root' => $rootBreakingChanges . 'index'],
        '9.1. TypeScript 3.6'=>  ['root' => $rootBreakingChanges . 'typescript-3.6'],
        '9.2. TypeScript 3.5'=>  ['root' => $rootBreakingChanges . 'typescript-3.5'],
        '9.3. TypeScript 3.4'=>  ['root' => $rootBreakingChanges . 'typescript-3.4'],
        '9.4. TypeScript 3.2'=>  ['root' => $rootBreakingChanges . 'typescript-3.2'],
        '9.5. TypeScript 3.1'=>  ['root' => $rootBreakingChanges . 'typescript-3.1'],
        '9.6. TypeScript 3.0'=>  ['root' => $rootBreakingChanges . 'typescript-3.0'],
        '9.7. TypeScript 2.9'=>  ['root' => $rootBreakingChanges . 'typescript-2.9'],
        '9.8. TypeScript 2.8'=>  ['root' => $rootBreakingChanges . 'typescript-2.8'],
        '9.9. TypeScript 2.7'=>  ['root' => $rootBreakingChanges . 'typescript-2.7'],
        '9.10. TypeScript 2.6'=>  ['root' => $rootBreakingChanges . 'typescript-2.6'],
        '9.11. TypeScript 2.4'=>  ['root' => $rootBreakingChanges . 'typescript-2.4'],
        '9.12. TypeScript 2.3'=>  ['root' => $rootBreakingChanges . 'typescript-2.3'],
        '9.13. TypeScript 2.2'=>  ['root' => $rootBreakingChanges . 'typescript-2.2'],
        '9.14. TypeScript 2.1'=>  ['root' => $rootBreakingChanges . 'typescript-2.1'],
        '9.15. TypeScript 2.0'=>  ['root' => $rootBreakingChanges . 'typescript-2.0'],
        '9.16. TypeScript 1.8'=>  ['root' => $rootBreakingChanges . 'typescript-1.8'],
        '9.17. TypeScript 1.7'=>  ['root' => $rootBreakingChanges . 'typescript-1.7'],
        '9.18. TypeScript 1.6'=>  ['root' => $rootBreakingChanges . 'typescript-1.6'],
        '9.19. TypeScript 1.5'=>  ['root' => $rootBreakingChanges . 'typescript-1.5'],
        '9.20. TypeScript 1.4'=>  ['root' => $rootBreakingChanges . 'typescript-1.4'],
    ]
        ]

];