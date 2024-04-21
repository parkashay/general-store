<template>
  <div class="flex flex-col md:flex-row justify-evenly my-12 gap-6">
    <div class="flex flex-col gap-3 justify-center">
      <h2>Select Payment Method</h2>
      <SfButton @click="handleCheckout">
        <SfIconLocalShipping /> Cash on Delivery
      </SfButton>
    </div>
    <div>
      <OrderSummary />
    </div>
  </div>
</template>

<script setup>
import { SfButton, SfIconLocalShipping } from "@storefront-ui/vue";
const handleCheckout = () => {
  navigateTo("/checkout/success");
};
</script>
