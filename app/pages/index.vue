<script setup>
const { site } = useAppConfig()

useHead({
  title: "Home"
})
</script>

<template>
  <div class="header flex">
    <!-- {% comment %}{% include nav.html %}{% endcomment %} -->
    <!-- Header -->
    <header class="header flex" role="banner">
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
                    <!--<hr class="hr-line">
                    <h3 class="title">
                        <a href="{{ site.url }}">
                        	<p style="font-size:1rem;font-weight:300">{{ site.bio }}</p>
			            </a>
                    </h3>-->
                    <SocialLinks />
                  <hr class="hr-line">
                  <h3 class="title">
                         <a class="btn zoombtn" href="/about">
                         About
                         </a>
                         <a class="btn zoombtn" :href="site.blog_url">
                         Blog
                         </a>
                         <!--<a class="btn zoombtn" href="{{ site.url }}/projects">
                         Projects
                         </a>-->
                         <div class="btn cancel">Projects</div>
                 </h3>
            </div>
        </div>
    </header>
    <!-- {% include scripts.html %} -->
  </div>
</template>

<style scoped>
.cancel {
  text-decoration: line-through;
}
</style>