## 修改右小标题及侧边栏当前颜色
添加 `.vitepress/theme/wang.css`文件
```css
.outline-link.active {
  color: green !important;  
}
 .VPSidebarItem.is-active> .item .link > .text{
  color: green !important;  
}
.outline-marker {
  background-color: green !important;
}
.VPSidebarItem.is-active>.item>.indicator{
  background-color: green !important;
}
```
修改 `.vitepress/theme/index.ts`
```js
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './wang.css' // 加这一行
```