<script setup lang="ts">
const { data: page } = await useAsyncData('privacy',
  () => queryCollection('privacy').first()
)
</script>

<template>
  <Article :page="page" />
</template>
