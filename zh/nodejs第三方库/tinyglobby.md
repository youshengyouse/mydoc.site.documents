# tinyglobby
- 代码：https://github.com/SuperchupuDev/tinyglobby

## 安装
```sh
pnpm add tinyglobby
```

## 用法
```js
import { glob,globSync} from "tinyglobby"

const src = "/www2024/1_doing/documents"

const files = await glob(['*.md'], { cwd:src});
const files2 = await glob(['**.md'], { cwd:src}); // 两个星号，当expandDirectories值为false时，相当于遍历所有目录
const files3 = await glob(['zh/**/*.md'], { cwd:src });
const files4 = await glob(['zh/**/*.md','en/**/*.md'], { cwd:src });


const files5 =await glob(['zh/**/*.md'], {  // await不能少，否则结果为  Promise { <pending> }
    cwd:src,
    ignore: [
        '**/node_modules/**',
        '**/其它/**',
        '**/博客/**',
        '**/es6/**',
        '**/vite/**',
        '**/vitepress/**',
        '**/typescript5.5/**'
      ],
      expandDirectories: true // 是否展开目录，true和false从结果上看不出差别
 });



 const files6 =await globSync(['zh/**/*.md'], {  // 同步函数前面不用加 await，加了也没影响
    cwd:src,
    ignore: [
        '**/node_modules/**',
        '**/其它/**',
        '**/博客/**',
        '**/es6/**',
        '**/vite/**',
        '**/vitepress/**',
        '**/typescript5.5/**'
      ],
      expandDirectories: false // 是否展开目录，true和false从结果上看不出差别
 });

 const files7 = await glob(['**.md'], { cwd:src,expandDirectories:false }); // 包括所有子目录的文件，注意这里有两个**，且expandDirectories值为false
// console.dir(files)
// console.dir(files2)
// console.dir(files3)
// console.dir(files4)
// console.dir(files6)
console.dir(files7)
```