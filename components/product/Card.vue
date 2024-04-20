<template>
  <div
    class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[400px] h-full"
  >
    <div class="relative">
      <NuxtLink :href="'/products/' + id" class="block">
        <img
          :src="image"
          :alt="title"
          class="block object-cover h-auto rounded-md aspect-square"
          width="300"
          height="300"
        />
      </NuxtLink>
      <SfButton
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
        aria-label="Add to wishlist"
      >
        <SfIconFavorite size="sm" />
      </SfButton>
    </div>
    <div class="p-4 border-t border-neutral-200 flex flex-col items-stretch">
      <NuxtLink
        :href="'/products/' + id"
        variant="secondary"
        class="no-underline text-xl font-semibold"
      >
        {{ title.slice(0,40) }}
      </NuxtLink>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="rating?.rate" :max="5" />

        <SfCounter size="xs"> {{ rating?.count }} </SfCounter>
      </div>
      <p
        class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700 line-clamp-3"
      >
        <!-- tailwind's line clamp feature is not working for some reason so slice is used. -->
        {{ description.slice(0, 100) }}...
      </p>
      <span class="block pb-2 font-bold typography-text-lg">${{ price }}</span>
      <SfButton size="sm">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        Add to cart
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  SfRating,
  SfCounter,
  SfButton,
  SfIconShoppingCart,
  SfIconFavorite,
} from "@storefront-ui/vue";
defineProps(["id", "title", "image", "description", "rating", "price"]);
</script>
