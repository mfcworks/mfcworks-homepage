<script setup lang="ts">
const { title, list } = defineProps(['title', 'list'])

useHead({
  script: [
    { src: '/js/wow.min.js' },
    { innerHTML: '(new WOW).init();' }
  ]
})
</script>

<template>
  <!-- <Navigation /> -->
  <!-- Header -->
  <header class="header" role="banner">
    <div class="wrapper animated fadeIn">
      <div class="content">
        <div class="post-title">
          <h1>{{ title }}</h1>
          <a class="btn zoombtn" href="/">
            <i class="fa fa-home"></i>
          </a>
        </div>
        <div class="post-list">
          <ul v-for="post in list">
            <li class="wow fadeInLeft" data-wow-duration="1.5s">
              <a class="zoombtn" :href="post.path">{{ post.date + '　' + post.title }}</a>
              <p>{{ post.description }}</p>
              <a :href="post.path" class="btn zoombtn">Read More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
