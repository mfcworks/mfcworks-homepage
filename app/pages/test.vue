<script lang="ts" setup>


const {data: blogs } = await useAsyncData('test-fetch1', () => { return queryCollection('posts').all() })



</script>

<template>
  <div>
    <p v-for="file in blogs">{{ file }}</p>

  </div>
  <hr>

</template>