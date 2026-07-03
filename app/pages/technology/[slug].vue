<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData('technology-' + route.path,
  () => queryCollection('technology').path(route.path).first()
)
</script>

<template>
  <SubArticle :page="page" backTo="/technology" />
</template>
