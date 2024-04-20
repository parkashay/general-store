<script setup lang="ts">
useHead({
  title: APP_NAME,
  meta: [
    { name: "description", content: APP_DESCRIPTION },
    { name: "keywords", content: APP_KEYWORDS },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>