<script setup lang="ts">
import type { NuxtError } from '#app'
const { site } = useAppConfig()

useHead({
  style: [`
    body {
      background-image: url(${site.background});
      background-repeat: no-repeat;
      background-size: cover;
  }
  `],
  script: [
    { src: '/js/modernizr-3.3.1.custom.min.js' },
    { src: '/js/jquery-1.12.0.min.js' },
    { src: '/js/jquery.dlmenu.min.js' },
    { src: '/js/jquery.goup.min.js' },
    { src: '/js/jquery.magnific-popup.min.js' },
    { src: '/js/jquery.fitvid.min.js' },
    { src: '/js/scripts.js' },
    // { innerHTML: `
    //   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    //     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    //     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    //   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    //   ga('create', '{{ site.google.analytics }}', 'auto');  
    //   ga('require', 'linkid', 'linkid.js');
    //   ga('send', 'pageview');`
    // }
  ]
})

defineProps<{ error: NuxtError }>()
</script>

<template>
  <Navigation />
  <!-- <Navigation /> -->
  <!-- Header -->
  <header class="header" role="banner">
    <div class="wrapper animated fadeIn">
      <div class="content">
        <!-- <div class="post-title {% if page.feature %} feature {% endif %}"> -->
        <div class="post-title">
          <h1>{{ error.status }}</h1>
          <a class="btn zoombtn" href="/">
            <i class="fa fa-home"></i>
          </a>
        </div>
          <p><strong>エラーが発生しました :(</strong></p>
          <p>{{ error.statusText }}</p>
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

<style>
/* <header>の中央寄せを再現 */
#__nuxt {
  height: 100%;
}

/* original css bug */
.content {
  line-height: normal;
}
figcaption {
  line-height: normal;
}

p {
  margin: 10px auto;
  max-width: 600px;
  text-align: center;
  font-size: 20px;
}
</style>
