<script setup>
const { site } = useAppConfig()
console.log('posts.vue')
useHead({
  script: [
    { src: '/js/wow.min.js' },
    { innerHTML: '(new WOW).init();' }
  ]
})

// Retrieve all post data from 'content/posts/*.md'
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())

const _page = {
  title: 'All Posts',
  excerpt: 'A List of Posts',
  comments: false
}
</script>

<template>
  <!-- <Navigation /> -->
  <!-- Header -->
  <header class="header" role="banner">
    <div class="wrapper animated fadeIn">
      <div class="content">
        <div class="post-title">
          <h1>{{ _page.title }}</h1>
          <a class="btn zoombtn" href="/">
            <i class="fa fa-home"></i>
          </a>
        </div>
        <div class="post-list">
          <ul v-for="post in posts">
            <li class="wow fadeInLeft" data-wow-duration="1.5s">
              <a class="zoombtn" :href="post.path + '/'">{{ post.title }}</a>
              <p>{{ post.description }}</p>
              <a :href="post.path + '/'" class="btn zoombtn">Read More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
