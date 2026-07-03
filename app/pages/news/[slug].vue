<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData('news-' + route.path,
  () => queryCollection('news').path(route.path).first()
)
</script>

<template>
  <SubArticle :page="page" backTo="/news" />
</template>
