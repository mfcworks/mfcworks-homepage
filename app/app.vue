<script setup>
const app = useAppConfig()
</script>

<template>
  <div :style="{ backgroundImage: `url(${app.site.background})` }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>
