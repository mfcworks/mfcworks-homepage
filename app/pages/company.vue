<script lang="ts" setup>
const { site } = useAppConfig()

const { data: page } = await useAsyncData('company',
  () => queryCollection('company').path('/company').first()
)
</script>

<template>
  <!-- <Navigation /> -->
  <!-- Header -->
  <header class="header" role="banner">
    <div class="wrapper animated fadeIn">
      <div class="content">
        <!-- <div class="post-title {% if page.feature %} feature {% endif %}"> -->
        <div :class="`post-title ${page.feature ? 'feature' : ''}`">
          <h1>{{ page.title }}</h1>
          <a class="btn zoombtn" :href="site.url">
            <i class="fa fa-chevron-left"></i>
          </a>
        </div>
        <!-- {{ content }} -->
        <ContentRenderer v-if="page" :value="page" />
      </div>
    </div>
    <!-- <section id="disqus_thread" class="animated fadeInUp" v-if="page.comments && site.disqus_shortname"></section> -->
    <!-- /#disqus_thread -->
  </header>
  <!-- {% include scripts.html %}
  {% if site.mathjax == true %} -->
  <!-- MathJax -->
  <!-- <script async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
  {% endif %} -->
</template>
