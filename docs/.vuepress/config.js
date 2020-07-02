module.exports = {
  title: '眼圈发黑',
  description: '分享学习笔记的个人博客',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '学习笔记',
        ariaLabel: 'advanced',
        items: [{
          text: 'Git',
          link: '/blog/guide/Git/1.Git的安装到添加到本地仓库'
        },
        {
          text: 'Terminal',
          link: '/blog/guide/Terminal/1.Win10 Terminal 命令使用'
        },
        {
          text: 'CSS预处理器',
          ariaLabel: 'advanced',
          items: [
            {
              text: 'Sass',
              link: '/blog/guide/css-pretreatment/1.Sass基本运用'
            }
          ]
        }
      ]
      },
      {
        text: '高级',
        ariaLabel: 'advanced',
        items: [{
          text: '设计模式',
          link: '/blog/design-pattern/1.设计模式与开发实践-多态'
        }]
      },
      {
        text: 'Github',
        link: 'https://github.com/lfb0728'
      },
      {
        text: '掘金',
        link: 'https://juejin.im/user/5d560a03518825053e0431a0/posts'
      }
    ],
    sidebar: {
      /**学习笔记 */
      // Git
      '/blog/guide/Git/': [
        '1.Git的安装到添加到本地仓库',
        '2.Git时光穿梭机-版本回退',
        '3.Git工作区和暂存区',
        '4.Git撤销修改',
        '5.Git删除文件',
        '6.Git远程仓库',
        '7.Git添加远程仓库',
        '8.Git从远程库克隆',
        '9.Git创建分支与合并分支',
        '10.Git解决冲突',
        '11.Git分支管理策略',
        '12.GitBug分支',
        '13.GitFeature',
        '14.Git多人协作',
        '15.Git创建标签',
        '16.Git操作标签',
        '17.Git使用GitHub仓库',
        '18.Git忽略特殊文件',
        '19.Git配置命令别名',
        '20.Git操作命令合集'
      ],
      // Terminal
      '/blog/guide/Terminal/': [
        '1.Win10 Terminal 命令使用',
        '2.Git Bash 常用命令行',
        '3.cmd 常用命令行'
      ],
      // css预处理
      '/blog/guide/css-pretreatment/': [
        '1.Sass基本运用',
        '2.Sass数据类型',
        '3.Sass@-Rules',
        '4.Sass控制指令',
        '5.Sass混合指令和函数指令',
        '6.Sass输出格式'
      ],

      /**高级 */
      // 设计模式
      '/blog/design-pattern/': [
        '1.设计模式与开发实践-多态',
        '2.this、call和apply',
        '3.闭包',
        '4.高级函数',
        '5.单例模式',
        '6.策略模式',
        '7.代理模式',
        '8.迭代器模式'
      ],
    }
  },
  lastUpdated: 'Last Updated',
  configureWebpack: {
    output: {
      publicPath: '/'
    }
  }
}