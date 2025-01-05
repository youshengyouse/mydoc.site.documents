# `debug`
- 代码：https://github.com/debug-js/debug

## 安装
```sh
pnpm add debug
```
## 用法
新建文件 del.js
```js
var debug = require('debug')('http')
  , http = require('http')
  , name = '第一个app应用';

// fake app

debug('开始启动 %o', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  debug('你的请求是')
  res.end('hello\n');
}).listen(3000, function(){
  debug('监听');
});
```
在命令行执行,记住前面别少了  **DEBUG=http**
```sh
root@pan:/www2024/4_tutorial/vitepress/01# DEBUG=http node del.js
  http 开始启动 '第一个app应用' +0ms
  http 监听 +2ms
  http GET /?vscodeBrowserReqId=1736062943316 +4s
  http 你的请求是 +0ms
  http GET /?vscodeBrowserReqId=1736062946680 +3s
  http 你的请求是 +0ms
  http GET /name=daqi?vscodeBrowserReqId=1736062953009 +6s
  http 你的请求是 +0ms
```