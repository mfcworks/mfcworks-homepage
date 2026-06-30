<script setup>
const { site } = useAppConfig()
</script>

<template>
  <div class="header flex">
    <!-- <Navigation /> -->
    <!-- Header -->
    <header class="header flex" role="banner"> <!--style="min-height: 100vh;"-->
      <div class="container animated fadeIn">
        <div class="row">
          <a :href="site.url">
            <img :src="site.logo" class="img-circle zoombtn animated rotateIn">
          </a>
          <h3 class="title">
            <a class="zoombtn" :href="site.url">
              <p style="font-size:1.2rem;font-weight:300">{{ site.title }}</p>
            </a>
          </h3>
          <hr class="hr-line">
          <h3 class="title">
            <a :href="site.url">
              <p style="font-size:1rem;font-weight:300">{{ site.bio }}</p>
            </a>
          </h3>
          <SocialLinks />
          <hr class="hr-line">
          <h3 class="title">
            <NuxtLink class="btn zoombtn" to="/company">
            会社概要
            </NuxtLink>
            <NuxtLink class="btn zoombtn" to="/service">
            事業内容
            </NuxtLink>
            <NuxtLink class="btn zoombtn" to="/news">
            ニュース
            </NuxtLink>
            <NuxtLink class="btn zoombtn" to="/technology">
            技術事例
            </NuxtLink>
            <NuxtLink class="btn zoombtn" to="/contact">
            お問い合わせ
            </NuxtLink>
          </h3>
        </div>
      </div>
    </header>
    <!-- {% include scripts.html %} -->
  </div>
</template>
