<script lang="ts" setup>

</script>

<template>
  <!-- <Navigation /> -->
  <!-- Header -->
  <header class="header" role="banner">
    <div class="wrapper animated fadeIn">
      <div class="content">
        <!-- <div class="post-title {% if page.feature %} feature {% endif %}"> -->
        <div class="post-title">
          <h1>お問い合わせ</h1>
          <a class="btn zoombtn" href="/">
            <i class="fa fa-chevron-left"></i>
          </a>
        </div>
        <!-- {{ content }} -->
        <ContactForm />
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
