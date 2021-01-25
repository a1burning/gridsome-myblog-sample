# Gridsome(一)
## Gridsome介绍

Gridsome是一个免费开源的，基于Vue.js技术栈的静态网站生成器。使用Gridsome可以快速轻松地开发静态网站。

- GitHub 仓库：https://github.com/gridsome/gridsome
- 官网：https://gridsome.org/

## 什么是静态网站生成器
- 静态网站生成器是使用一系列配置、模板以及数据，生成静态HTML文件及相关资源的工具
- 由于是提前的生成静态网页，这个功能也叫预渲染
- 静态网站生成的网站不需要类似PHP这样的服务器去部署运行，只需要放到支持静态资源的 Web Server 或 CDN 上即可运行

## 静态网站的好处
- 省钱：不需要专业的服务器，只要能托管静态文件的空间即可
- 快速：不经过后端服务器的处理，只传输内容，相比传统动态网站更加的快。
- 安全：没有后端程序的执行，自然会更安全

## 常见的静态网站生成器
- Jekyll (Ruby) 
- Hlexo (Node) 
- Hugo (Golang) 
- Gatsby (Node/React) 
- Gridsome (Node/Vue)
- 另外，Nextjs，Nuxt.js 也能生成静态网站，但是它们更多被认为是 SSR （服务端渲染） 框架。

## 什么是JAMStack
- 这类静态网站生成器还有个漂亮的名字叫 JAMStack
- JAMStack的 JAM 是 JavaScript、API和 Markup的首字母组合
- 本质上是一种胖前端，通过调用各种API来实现更多的功能，其实也是一种前后端的模式，只不过这里前后端分离得比较明显，完全的纯客户端应用。
- 甚至前后端来自多个不同的厂商，可以来自于REST API的接口数据，也可以来自本地的纯文本的数据，甚至可以来自第三方的数据。例如Gridsome。

[Learn more about the Jamstack](https://gridsome.org/docs/jamstack).

## 静态应用的使用场景

- 不适合有大量路由页面的应用
    + 如果您的站点有成百上千条路由页面，则预渲染将非常缓慢。当然，您每次更新只需要做一次，但是可能要花一些时间。
- 不适合有大量动态内容的应用
    + 例如后台管理系统，到处都是增删改查这种应用场景就不适合静态网站。适合纯内容展示类的：博客、文档、企业宣传站等。

## Gridsome是什么

- Gridsome 是由Vue.js驱动的Jamstack框架，用于构建默认情况下快速生成的静态生成的网站和应用。
- Gridsome是Vue提供支持的静态站点生成器，用于为任何无头CMS，本地文件或API构建可用于CDN的网站
- 使用Vue.js，webpack和Node.js等现代工具构建网站。通过npm进行热重载并访问任何软件包，并使用自动前缀在您喜欢的预处理器（如Sass或Less）中编写CSS。
- 基于 Vue.js 的 Jamstack 框架
- Gridsome 使开发人员可以轻松构建默认情况下快速生成的静态生成的网站和应用程序
- Gridsome允许在内容里面引用任何CMS或数据源。
  从WordPress，Contentful或任何其他无头CMS或API中提取数据，并在组件和页面中使用GraphQL访问它。

## 为什么选择 Gridsome

- **Vue.js for frontend** - The simplest & most approachable frontend framework.
- **Data sourcing** - Use any Headless CMSs, APIs or Markdown-files for data.
- **Local development with hot-reloading** - See code changes in real-time.
- **File-based page routing** - Any `Name.vue` file in `src/pages` is a static route.
- **Dynamic routing** - Any `[param].vue` file in `src/pages` is a dynamic route.
- **Static file generation** - Deploy securely to any CDN or static web host.
- **GraphQL data layer** - Simpler data management with a centralized data layer.
- **Automatic Code Splitting** - Builds ultra performance into every page.
- **Plugin ecosystem** - Find a plugin for any job.

## Gridsome是如何工作的

Gridsome生成静态HTML，一旦加载到浏览器中，该HTML就会渗入Vue SPA。这意味着您可以使用Gridsome构建静态网站和动态应用程序。

Gridsome为每个页面构建一个.html文件和一个.json文件。加载第一页后，它仅使用.json文件来预取和加载下一页的数据。它还为需要它的每个页面构建一个.js包（代码拆分）。

它使用vue-router进行SPA路由，并使用vue-meta来管理<head>。

Gridsome默认添加最小57kB的gzip JS捆绑包大小（vue.js，vue-router，vue-meta和一些用于图像延迟加载的文件）。

[详细了解其工作原理](https://gridsome.org/docs/how-it-works)

## Gridsome学习建议

- 需要有Vue基础
- 应该具有有关HTML，CSS，Vue.js以及如何使用终端的基本知识
- 了解GraphQL的工作原理是有好处的，但不是必需的

## Gridsome使用场景

- 不适合管理系统
- 简单页面展示
- 想要有更好的 SEO
- 想要有更好的渲染性能

## 备选方案
- [VuePress](https://vuepress.vuejs.org/)
- [Nuxt](https://nuxtjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)
