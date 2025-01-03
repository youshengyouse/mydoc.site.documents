## 初始化
```sh
# 当前目录 /www2024/4_tutorial/vitepress/01
pnpm vitepress init

server当前root为 /www2024/4_tutorial/vitepress/01

  vitepress 版本 v1.5.0


┌  欢迎使用 VitePress!
│
◇  VitePress应该在哪里初始化配置 Where should VitePress initialize the config?
│  ./
│
◇  站点标题 Site title:
│  My Awesome Project
│
◇  站点描述 Site description:
│  A VitePress Site
│
◇  主题Theme:
│  默认主题+自定义主题 Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run pnpm run docs:dev and start writing.

Tips:
- 确保添加 .vitepress/dist 和 .vitepress/cache 到 .gitignore 文件中.
- 由于您已选择自定义主题, 您还应该显式安装 vue 作为开发依赖.
```
安装vue
```sh
pnpm add vue
Packages: +1
+
Progress: resolved 165, reused 124, downloaded 0, added 1, done

dependencies:
+ vue 3.5.13

Done in 1.6s
```

## 启动
```sh
pnpm docs:dev

> 01@1.0.0 docs:dev /www2024/4_tutorial/vitepress/01
> vitepress dev

server当前root为 /www2024/4_tutorial/vitepress/01

  vitepress 版本 v1.5.0


  vitepress v1.5.0

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```