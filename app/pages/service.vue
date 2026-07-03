<script setup lang="ts">
const { data: page } = await useAsyncData('service',
  () => queryCollection('service').first()
)
</script>

<template>
  <Article :page="page" />
</template>
