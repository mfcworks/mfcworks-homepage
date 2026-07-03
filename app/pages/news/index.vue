<script setup lang="ts">
const { data: list } = await useAsyncData('news',
  () => queryCollection('news').order('date', 'DESC').all()
)
</script>

<template>
  <ArticleList title="ニュース" :list="list" />
</template>
