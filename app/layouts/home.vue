<script setup>
//import SocialLinks from "~/components/SocialLinks.vue"
const { site } = useAppConfig()

useHead({
  htmlAttrs: {
    class: "no-js"
  }
})
</script>

<template>
  <div>
    <!-- Header -->
    <header class="header flex" role="banner">
      <div class="container animated fadeIn">
        <div class="row">

          <NuxtLink to="/">
            <img src="/img/logo.png" class="img-circle zoombtn animated rotateIn">
          </NuxtLink>

          <h3 class="title">
            <NuxtLink class="zoombtn" to="/">
              <p style="font-size:1.2rem;font-weight:300">
                {{ site.title }}
              </p>
            </NuxtLink>
          </h3>

          <SocialLinks />

          <hr class="hr-line">

          <h3 class="title">
            <NuxtLink class="btn zoombtn" to="/about">
              About
            </NuxtLink>

            <NuxtLink class="btn zoombtn" to="/blog">
              Blog
            </NuxtLink>

            <div class="btn">Projects</div>
          </h3>

        </div>
      </div>
    </header>
  </div>
</template>