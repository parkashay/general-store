<template>
    <div class="min-h-[400px] flex flex-col my-16 gap-6">
        <h2>Thank you for Ordering !!</h2>
        <span class="text-center"> <SfIconCheckCircle /> Your order has been placed.</span>
        <span class="text-center">You will recieve a confirmation via a call at your phone number</span>
    </div>
</template>

<script setup lang="ts">
import { SfIconCheckCircle } from "@storefront-ui/vue";
const cart = useCart("get")
for (const item of cart.value) {
  useCart("remove", undefined, item.item.id)
}
</script>