<template>
  <h2 v-if="products.length > 0">Highest Rated Products</h2>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center my-6 px-3"
  >
    <ProductCard
      v-for="{ id, title, price, image, description, rating } in products?.sort((a, b) => b.rating.rate - a.rating.rate)?.slice(0,4)"
      :key="title"
      :id="id"
      :title="title"
      :price="price"
      :image="image"
      :description="description"
      :rating="rating"
    />
  </div>

  <h2 v-if="products.length > 0">Most Popular Products</h2>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center my-6 px-3"
  >
    <ProductCard
      v-for="{ id, title, price, image, description, rating } in products?.sort((a, b) => b.rating.count - a.rating.count)?.slice(0,4)"
      :key="title"
      :id="id"
      :title="title"
      :price="price"
      :image="image"
      :description="description"
      :rating="rating"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/utils/types';

let products: Product[] = []
try {
  products = await useProduct("multiple")
} catch (err) {
  products = []
  console.error(err);
}


</script>
