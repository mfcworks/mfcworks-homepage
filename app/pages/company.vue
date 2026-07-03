<script setup lang="ts">
const { data: page } = await useAsyncData('company',
  () => queryCollection('company').first()
)
</script>

<template>
  <Article :page="page" />
</template>
