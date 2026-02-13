<script setup>
import { computed } from "vue"

const route = useRoute()
const app = useAppConfig()

const meta = computed(() => route.meta || {})

const pageTitle = computed(() =>
  meta.value.title
    ? `${meta.value.title} – ${app.site.title}`
    : app.site.title
)

const description = computed(() =>
  meta.value.description || app.site.description
)

const feature = computed(() =>
  meta.value.feature || app.site.logo
)

const url = computed(() =>
  app.site.url + route.path
)

useHead({
  title: pageTitle,
  meta: [
    { name: "description", content: description.value },

    // Twitter
    { name: "twitter:card", content: meta.value.feature ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: pageTitle.value },
    { name: "twitter:description", content: description.value },
    { name: "twitter:image", content: app.site.url + feature.value },

    // OpenGraph
    { property: "og:type", content: "article" },
    { property: "og:title", content: pageTitle.value },
    { property: "og:description", content: description.value },
    { property: "og:url", content: url.value },
    { property: "og:site_name", content: app.site.title },
    { property: "og:image", content: app.site.url + feature.value }
  ],
  link: [
    { rel: "canonical", href: url.value },
    { rel: "icon", href: "/favicon.ico" }
  ]
})
</script>

<template>
  <NuxtPage />
</template>