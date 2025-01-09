# only-allow
- https://github.com/pnpm/only-allow

## 安装
```sh
root@pan:/www2024/0_common/js/mikejs# pnpm i only-allow
```

## 配置preinstall
```js

{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}
```

## 安装prettier测试一下
```sh
root@pan:/www2024/0_common/js/mikejs# npm i prettier
npm error Cannot set properties of null (setting 'peer')
npm error A complete log of this run can be found in: /root/.npm/_logs/2025-01-08T09_27_10_203Z-debug-0.log
# 上面使用npm 报错


root@pan:/www2024/0_common/js/mikejs# pnpm i prettier
Packages: +1
+
Progress: resolved 3, reused 3, downloaded 0, added 1, done

dependencies:
+ prettier 3.4.2

Done in 593ms
```