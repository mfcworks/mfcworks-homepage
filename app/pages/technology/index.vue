<script setup lang="ts">
const { data: list } = await useAsyncData('technology',
  () => queryCollection('technology').order('date', 'DESC').all()
)
</script>

<template>
  <ArticleList title="技術事例" :list="list" />
</template>
