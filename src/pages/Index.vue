<template>
  <Layout>
    <!-- Page Header -->
    <!--cover-->
    <header class="masthead" :style="{
      backgroundImage: `url(${GRIDSOME_API_URL + general.cover.url})`
    }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <!--标题-->
              <h1>{{ general.title }}</h1>
              <!--副标题-->
              <span class="subheading">{{ general.subTitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <!-- 文章列表 -->
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/post/' + edge.node.id">
              <!-- 标题 -->
              <h2 class="post-title">
                {{ edge.node.title}}
              </h2>
              <!-- 副标题没有注释 -->
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <!-- 作者、事件 -->
            <p class="post-meta">Posted by
              <a href="#">{{ edge.node.author.firstname + edge.node.author.lastname }}</a>
              on {{ edge.node.created_at }}
            </p>
            <!-- 标签 -->
            <p>
              <g-link 
                :to="'/tag/' + tag.id" 
                v-for="tag in edge.node.tags" 
                :key="tag.id"
                style="margin-right:5px;">
                  <span class="badge badge-dark">{{ tag.title }}</span>
              </g-link>
            </p>
            <hr>
          </div>
          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div> -->
          <Pager linkClass="pageCss" :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int){
  posts: allStrapiPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        author {
          firstname
          lastname
        }
        tags {
          id
          title
        }
        created_at
      }
    }
  }

  general: allStrapiGeneral {
    edges {
      node {
        id
        title
        subTitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  },
  computed: {
    // 计算属性可以简化
    general () {
      return this.$page.general.edges[0].node
    }
  }
}
</script>

<style></style>
