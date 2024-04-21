<template>
    <div class="my-6">
      <div class="md:shadow-lg md:rounded-md md:border md:border-neutral-100">
        <div class="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
          <p class="typography-headline-4 font-bold md:typography-headline-3">Order Summary</p>
          <p class="typography-text-base font-medium">(Items: {{ itemsCount }})</p>
        </div>
        <div class="px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0">
          <div class="flex justify-between typography-text-base pb-4">
            <div class="flex flex-col grow pr-2">
              <p>Items Subtotal</p>
              <p class="my-2">Delivery</p>
              <p>Estimated Sales Tax</p>
            </div>
            <div class="flex flex-col text-right">
              <p>{{ formatPrice(itemsSubtotal) }}</p>
              <p class="my-2">{{ formatPrice(delivery) }}</p>
              <p>{{ formatPrice(tax) }}</p>
            </div>
          </div>
          <div
            class="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200"
          >
            <p>Total</p>
            <p>{{ formatPrice(totalPrice) }}</p>
          </div>
          <div class="typography-text-sm mt-4 text-center">
            By placing my order, you agree to our <SfLink href="#">Terms and Conditions</SfLink> and our
            <SfLink href="#">Privacy Policy.</SfLink>
          </div>
        </div>
      </div>
     
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { SfLink } from '@storefront-ui/vue';
  
  
  const cart = useCart("get")
  const itemsCount = cart.value.length
  const itemsSubtotal = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.item.price!, 0);
  })

  const tax = itemsSubtotal.value * 0.13
  const delivery  = 5
  const totalPrice = itemsSubtotal.value + tax + delivery
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };
  </script>
  
  