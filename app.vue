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
