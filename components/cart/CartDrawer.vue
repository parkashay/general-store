<template>
    <SfButton @click="open = true"> <SfIconShoppingCart /> <span>{{ cartItems.length }}</span> </SfButton>
  
    <transition
      enter-active-class="transition duration-500 ease-in-out"
      leave-active-class="transition duration-500 ease-in-out"
      :enter-from-class="placement === 'left' ? '-translate-x-full' : 'translate-x-full'"
      :enter-to-class="placement === 'left' ? 'translate-x-0' : 'translate-x-0'"
      :leave-from-class="placement === 'left' ? 'translate-x-0' : 'translate-x-0'"
      :leave-to-class="placement === 'left' ? '-translate-x-full' : 'translate-x-full'"
    >
      <SfDrawer
        ref="drawerRef"
        v-model="open"
        :placement="placement"
        :class="[
          'bg-neutral-50',
          'z-50',
          'px-2',
          'border',
          'border-gray-300',
          { 'max-w-[370px]': placement === 'left' || placement === 'right' },
        ]"
      >
        <header class="flex items-center justify-between px-10 py-6 bg-primary-700">
          <div class="flex items-center text-white"><SfIconShoppingCart class="mr-2" /> Your Cart</div>
          <SfButton square variant="tertiary" class="text-white" @click="open = false">
            <SfIconClose />
          </SfButton>
        </header>
        <div class="p-5 px-2 space-y-3">
            <CartItem v-for="{item, quantity} in cartItems"
             :key="item.id"
             :id="item.id"
             :title="item.title"
             :price="item.price"
             :quantity="quantity"
             :image="item.image"
             />
        </div>
        <SfButton v-if="cartItems.length" class="w-full self-end"
        @click="gotoCheckout"
        >Checkout <SfIconShoppingCartCheckout /> </SfButton>
      </SfDrawer>
    </transition>
  </template>
  
  <script lang="ts" setup>
  import {
    SfDrawer,
    SfDrawerPlacement,
    SfButton,
    SfIconClose,
    useTrapFocus,
    SfIconShoppingCart,
    SfIconShoppingCartCheckout,
  } from '@storefront-ui/vue';
  import { ref } from 'vue';
  
  const placement = ref<`${SfDrawerPlacement}`>('right');
  const open = ref(false);
  const drawerRef = ref();
  
  useTrapFocus(drawerRef, { activeState: open });
  

  const cartItems = useCart("get")

  const gotoCheckout = () => {
    open.value = false
    navigateTo('/checkout')
  }

  </script>
  
  