<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <!-- 标签标题 -->
              <h1># {{ $page.tag.title}}</h1>
              <!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
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
          <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
            <g-link :to="'/post/' + post.id">
              <!-- 标题 -->
              <h2 class="post-title">
                {{ post.title}}
              </h2>
            </g-link>
            <!-- 作者、事件 -->
            <p class="post-meta">Posted by
              <a href="#">{{ post.author.firstname + post.author.lastname }}</a>
              on {{ post.created_at }}
            </p>
            <!-- 标签 -->
            <hr>
          </div>
          <!-- Pager -->
          <!-- <Pager linkClass="pageCss" :info="$page.tag.belongsTo.pageInfo"/> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  tag: strapiTag (id: $id){
    id
    title
    posts {
      id
      title
      author {
        firstname
        lastname
      }
      created_at
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  name: 'TagPage',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  }
}
</script>

<style></style>
