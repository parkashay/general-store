<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "~/utils/types";
let products: Product[] = await useProduct("multiple");
const productsList = ref(products);

const sort = ref("default");

const filter = ref<{ category: string[]; rating: number }>({
  category: [],
  rating: 0,
});

watch(sort, () => {
  if (sort.value == "asc") {
    productsList.value.sort((a, b) => a.price - b.price);
  }
  if (sort.value == "desc") {
    productsList.value.sort((a, b) => b.price - a.price);
  }
});

watch(filter.value, () => {
  if (filter.value.category.length > 0) {
    productsList.value = products.filter((product) =>
      filter.value.category.includes(product.category) && product.rating.rate >= filter.value.rating
    );
  }
  else{
    productsList.value = products.filter((product) => product.rating.rate >= filter.value.rating)
  }
});
</script>

<template>
  <div v-if="products.length > 0">
    <h2>All Products</h2>
    <ProductSort v-model="sort" />
    <div class="flex gap-3">
      <div class="hidden lg:block">
        <ProductFilter v-model="filter" />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center my-6"
      >
        <ProductCard
          v-for="{
            id,
            title,
            price,
            image,
            description,
            rating,
          } in productsList"
          v-model="sort"
          :key="title"
          :id="id"
          :title="title"
          :price="price"
          :image="image"
          :description="description"
          :rating="rating"
        />
      </div>
    </div>
  </div>
  <h2 v-else class="my-12">No Products available</h2>
</template>
