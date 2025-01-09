import {sidebar} from "./sidebar"
import {nav} from  "/www2024/1_doing/documents/config/nav"
import {locales} from  "./locales"
export default {
  locales,
  title: "文档管理中心",
  description: "麦朵文档，完善中...",
  themeConfig: {
    nav,
    sidebar,
  },
  markdown:{
    lineNumbers:true,
    codeCopyButtonTitle: "拷贝代码到剪贴板",
    theme: 'github-dark',
  
  }
}
