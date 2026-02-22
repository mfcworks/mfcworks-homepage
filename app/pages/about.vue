<script setup>
const { site } = useAppConfig()

const { data: page } = await useAsyncData('about', () => queryCollection('content').path('/about/').first())

// useHead({
//   style: [`
//     .feature {
//       background-image: url(${page.value.feature});
//     }`
//   ]
// })
</script>

<template>
  <div>
    <!-- {% comment %}{% include nav.html %}{% endcomment %} -->
    <!-- Header -->
    <header class="header" role="banner">
        <div class="wrapper animated fadeIn">
            <div class="content">
                <div :class="`post-title ${page.feature ? 'feature' : ''}`">
                    <h1>{{ page.title }}</h1>
                    <a class="btn zoombtn" href="/">
                        <i class="fa fa-chevron-left"></i>
                    </a>
                </div>
                <ContentRenderer v-if="page" :value="page" />
                <div v-else>Page not found</div>
            </div>
        </div>
        <!-- {% if page.comments and site.disqus_shortname %}<section id="disqus_thread" class="animated fadeInUp"></section>/#disqus_thread{% endif %} -->
    </header>
    <!-- {% include scripts.html %} -->
    <!-- {% if site.mathjax == true %} -->
    <!-- MathJax -->
    <!-- <script async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script> -->
    <!-- {% endif %} -->
  </div>
</template>
