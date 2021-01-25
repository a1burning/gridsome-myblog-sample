// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        // 抓取本地文件数据，数据类型
        typeName: 'BlogPost',
        // 文件地址
        path: './content/blog/**/*.md',
      }
    },
    // 这个集合不是我们自己创建的，是这个插件帮我们创建的。
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // 查询限制Defaults to 100
        // 查询的数据类型
        contentTypes: ['post','tag'],
        // 默认有一个typeName，这个名字可以改
        // typeName: 'Strapi'
        // 单个节点，目前不需要
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // 受保护的，需要提供登录信息，目前不需要
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    // 集合的名字，这个是怎么来的?
    // 是插件中的typeName+contentTypes的name
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
