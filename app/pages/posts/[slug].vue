<script lang="ts" setup>
const { site } = useAppConfig()

const route = useRoute()
const { data: page } = await useAsyncData('post-' + route.path,
() => queryCollection('posts').path(route.path).first()
)
console.log('route.path=', route.path)

const date_to_string = (date: string | undefined) => date

</script>

<template>
  <!-- <Navigation /> -->
  <!-- Header -->
  <header class="header" role="banner">
    <div class="wrapper animated fadeIn">
      <div class="content">
        <div :class="`post-title ${page?.feature ? 'feature' : ''}`">
          <h1>{{ page?.title }}</h1>
          <h4>{{ date_to_string(page?.date) }}</h4>

          <p class="reading-time" v-if="site.reading_time">
            <i class="fa fa-clock-o"></i>
            <!-- TODO: {% include read-time.html %} -->
          </p><!-- /.entry-reading-time -->

          <a class="btn zoombtn" href="{{site.url}}/projects/" v-if="page?.project">
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          </a>
          <a class="btn zoombtn" href="{{site.url}}/posts/" v-else>
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          </a>
        </div>
        <!-- {{ content }} -->
        <ContentRenderer v-if="page" :value="page" />
        <div class="entry-meta">
          <!-- {% include meta.html %} -->
        </div>
      </div>
    </div>
    
  </header>
  <!-- {% include scripts.html %}
  {% if site.mathjax == true %} -->
  <!-- MathJax -->
  <!-- <script async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script> -->
  <!-- {% endif %} -->
</template>