<script setup>
const { site } = useAppConfig()
</script>

<template>
  <div>
    <hr class="hr-line" />
    <h3 class="title" style="font-size:30px;">
      <a v-if="site.email" class="social-btn" :href="`mailto:${site.email}`" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-envelope-square"></i>
      </a>

      <a v-if="site.twitter" class="social-btn" :href="`https://twitter.com/${site.twitter}`" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-twitter-square"></i>
      </a>

      <a v-if="site.facebook" class="social-btn" :href="`https://facebook.com/${site.facebook}`" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-facebook-square"></i>
      </a>

      <a v-if="site.linkedin" class="social-btn" :href="`https://linkedin.com/in/${site.linkedin}`" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-linkedin-square"></i>
      </a>

      <a v-if="site.instagram" class="social-btn" :href="`https://instagram.com/${site.instagram}`" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-instagram"></i>
      </a>

      <a v-if="site.github" class="social-btn" :href="`https://github.com/${site.github}`" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-github"></i>
      </a>

      <a v-if="site.youtube" class="social-btn" :href="`https://youtube.com/${site.youtube}`" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-youtube-square"></i>
      </a>

      <a v-if="site.gitlab" class="social-btn" :href="site.gitlab" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-fw fa-gitlab"></i>
      </a>
    </h3>
  </div>
</template>