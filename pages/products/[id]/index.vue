<script setup lang="ts">
import type { Product } from "~/utils/types";

const route = useRoute();
const id = route.params.id as string;
const product = (await useProduct("single", id)) as Product;
console.log(product);
</script>
<template>
  <ProductDetails
    :id="product.id"
    :title="product.title"
    :description="product.description"
    :price="product.price"
    :image="product.image"
    :category="product.category"
    :rating="product.rating"
  />
</template>
