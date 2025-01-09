export const vite=  {
  '/zh/vite/': [
    {
      text: '指引',
      base: '/zh/vite/guide/',
      collapsed: true,
      items:sidebarGuide()
    },
    {
      text: '配置',
      base: '/zh/vite/config/',
      collapsed: true,
      items:sidebarConfig()
    },
    {
      text: '教程',
      base: '/zh/vite/教程/',
      collapsed: true,
      items:[    {
        text: '重写vite',
        base: '/zh/vite/教程/重写vite/',
        collapsed: true,
        items:sidebarMike()
      },
    ]
    },
  ],
}

function sidebarGuide() {
  return [
    {
      text: '指南',
      collapsed: false,
      items: [
        {text: '为什么选 Vite',link: 'why'        },
        {text: '开始',link: 'index'        },
        {text: '功能',link: 'features'        },
        {text: '命令行接口',link: 'cli'        },
        {text: '使用插件',link: 'using-plugins'        },
        {text: '依赖预构建',link: 'dep-pre-bundling'        },
        {text: '静态资源处理',link: 'assets'        },
        {text: '构建生产版本',link: 'build'        },
        {text: '部署静态站点',link: 'static-deploy'        },
        {text: '环境变量与模式',link: 'env-and-mode'        },
        {text: '服务端渲染（SSR）',link: 'ssr'        },
        {text: '后端集成',link: 'backend-integration'        },
        {text: '比较',link: 'comparisons'        },
        {text: '故障排除',link: 'troubleshooting'        },
        {text: '性能',link: 'performance',        },
        {text: '理念',link: 'philosophy',        },
        {text: '从 v5 迁移',link: 'migration'        },
        {text: '破坏性变更',
          base: '/zh/vite/changes/',
          items:[
            {
              text: '破坏性变更',
              link: 'index',
            },
            {
              text: '现在',
              items: [],
            },
            {
              text: '未来',
              items: [
                {
                  text: '钩子函数中的 this.environment',
                  link: 'this-environment-in-hooks',
                },
                {
                  text: 'HMR hotUpdate 插件钩子',
                  link: 'hotupdate-hook',
                },
                {
                  text: '迁移到基于环境的API',
                  link: 'per-environment-apis',
                },
                {
                  text: '使用 ModuleRunner API 进行服务端渲染',
                  link: 'ssr-using-modulerunner',
                },
                {
                  text: '构建过程中的共享插件',
                  link: 'shared-plugins-during-build',
                },
              ],
            },
            {
              text: '过去',
              items: [],
            },
          ]
           },
      ]
    },

   {
      text: 'API',
      collapsed:true,
      items: [
        {
          text: '插件 API',
          link: 'api-plugin'
        },
        {
          text: 'HMR API',
          link: 'api-hmr',
        },
        {
          text: 'JavaScript API',
          link: 'api-javascript',
        },
        {
          text: '配置参考',
          base:"zh/vite/config/",
          link: 'index',
        },
      ],
    },

    {
      text: '环境 API',
      collapsed:true,
      items: [
        {
          text: '介绍',
          link: 'api-environment',
        },
        {
          text: '环境实例',
          link: 'api-environment-instances',
        },
        {
          text: '插件',
          link: 'api-environment-plugins',
        },
        {
          text: '框架',
          link: 'api-environment-frameworks',
        },
        {
          text: '运行时',
          link: 'api-environment-runtimes',
        },
      ],
    },
  ]
}


function sidebarConfig() {
  return [

      {
          text: '配置 Vite',
          link: 'index'
        },
        {
          text: '共享选项',
          link: 'shared-options'
        },
        {
          text: '服务器选项',
          link: 'server-options'
        },
        {
          text: '构建选项',
          link: 'build-options'
        },
        {
          text: '预览选项',
          link: 'preview-options'
        },
        {
          text: '依赖优化选项',
          link: 'dep-optimization-options'
        },
        {
          text: 'SSR 选项',
          link: 'ssr-options'
        },
        {
          text: 'Worker 选项',
          link: 'worker-options',
        },
      ]
    }

    function sidebarMike() {
      return [
          {
              text: '在stackblitz上新建空项目',
              link: '01_新建空项目mike'
            },
            {
              text: 'only-allow',
              link: '02_only-allow'
            },
            {
              text: 'prettier',
              link: '03_prettier'
            },
           
          ]
        }
 