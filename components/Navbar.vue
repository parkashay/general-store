<template>
  <header
    class="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-primary-700 border-b border-neutral-200"
  >
    <div
      class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full"
    >
      <NuxtLink
        to="/"
        aria-label="SF Homepage"
        class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0 text-xl font-semibold text-white"
      >
        {{ APP_NAME }}
      </NuxtLink>
      <SfButton
        aria-label="Open categories"
        class="text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 lg:hidden order-first lg:order-1 mr-4"
        square
        variant="tertiary"
      >
        <SfIconMenu />
      </SfButton>
      <NuxtLink
        to="/products"
        class="hidden lg:flex text-white hover:text-white active:text-white active:bg-primary-900 lg:mr-4 no-underline"
        variant="secondary"
      >
        <span class="hidden lg:flex whitespace-nowrap">Browse products</span>
      </NuxtLink>

      <!-- Search Autocomplete -->

      <div class="w-full z-50">
        <ProductSearch />
      </div>

      <!-- End Search Autocomplete -->

      <nav class="flex-1 flex justify-end lg:order-last lg:ml-4">
        <CartDrawer />
      </nav>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { SfButton, SfIconMenu } from "@storefront-ui/vue";
</script>
