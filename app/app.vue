<script setup>
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

</script>

<template>
  <Navigation />
  <NuxtPage />
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
</style>
