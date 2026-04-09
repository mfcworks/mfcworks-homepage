<script setup>
const { site } = useAppConfig()

const page = {
  title: 'About the Theme',
  tags: ['about', 'Jekyll', 'theme', 'moon'],
  date: '2024-02-11',
  comments: false
}
</script>

<template>
  <Navigation />
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
        <!-- { content start } -->
        <center><a href="http://TolgaTatli.github.io/Moonrise"><b>Moon</b></a> is a minimal, one column jekyll theme.</center>
        <h2 id="features">Features</h2>
        <ul>
          <li>Minimal, you can focus on your content</li>
          <li>Responsive</li>
          <li>Disqus integration</li>
          <li>Syntax highlighting</li>
          <li>Optional post image</li>
          <li>Social icons</li>
          <li>Page for sharing projects</li>
          <li>Optional background image</li>
          <li>Simple navigation menu</li>
          <li>MathJax support</li>
        </ul>
        <h2 id="preview">Preview</h2>
        <figure class="half">
          <a href="https://cloud.githubusercontent.com/assets/754514/14509720/61c61058-01d6-11e6-93ab-0918515ecd56.png"><img src="https://cloud.githubusercontent.com/assets/754514/14509720/61c61058-01d6-11e6-93ab-0918515ecd56.png" alt="" /></a> <a href="https://cloud.githubusercontent.com/assets/754514/14509716/61ac6c8e-01d6-11e6-879f-8308883de790.png"><img src="https://cloud.githubusercontent.com/assets/754514/14509716/61ac6c8e-01d6-11e6-879f-8308883de790.png" alt="" /></a> 
          <figcaption>Screenshots of Moon Theme</figcaption>
        </figure>
        <p>See a <a href="http://TolgaTatli.github.io/Moonrise">live version of Moon</a> hosted on GitHub.</p>
        <h2 id="getting-started">Getting Started</h2>
        <p>To learn how to install and use this theme check out the <a href="http://taylantatli.me/Moon/moon-theme/">Setup Guide</a> for more information.</p>
        <p><a href="https://github.com/TolgaTatli/Moonrise" class="btn">Install Moon</a></p>
        <!-- { content end } -->
      </div>
    </div>
    <section id="disqus_thread" class="animated fadeInUp" v-if="page.comments && site.disqus_shortname"></section>
    <!-- /#disqus_thread -->
  </header>
  <!-- {% include scripts.html %}
  {% if site.mathjax == true %} -->
  <!-- MathJax -->
  <!-- <script async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
  {% endif %} -->
</template>
