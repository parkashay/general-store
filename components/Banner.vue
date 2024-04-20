<template>
    <div class="relative min-h-[576px]">
      <div class="md:flex md:flex-row-reverse md:justify-center max-w[1536px] mx-auto md:min-h-[576px]">
        <div class="flex justify-center md:basis-2/4  md:overflow-hidden">
          <img
            :src="heroProduct.image"
            :alt="heroProduct.title"
            height="50"
            width="50"
            class="h-full w-full md:max-w-[350px] object-contain"
          />
        </div>
        <div class="p-4 md:p-10 md:max-w-[768px] md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p class="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Product of the day
          </p>
          <h1 class="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            {{ heroProduct.title.slice(0,20) }}
          </h1>
          <p class="typography-text-base md:typography-text-lg">
            {{ heroProduct.description }}
          </p>
          <NuxtLink :to="`/products/${heroProduct.id}`" class="flex flex-col md:flex-row gap-4 mt-6">
            <SfButton size="lg"> Order now </SfButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { SfButton } from '@storefront-ui/vue';
import type { Product } from '~/utils/types';

  const heroProduct: Product = await useProduct("single", Math.ceil(Math.random() * 10).toString());
  </script>
  
  