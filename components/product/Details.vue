<template>
  <section
    class="flex flex-col md:flex-row gap-6 justify-center px-3 items-center"
  >
    <div class="max-w-[400px]">
      <img :src="image" :alt="title" />
    </div>
    <div class="md:max-w-[640px] my-12">
      <div
        class="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4"
      >
        <SfIconSell size="sm" class="mr-1.5" />
        Sale
      </div>
      <h1 class="mb-1 font-bold typography-headline-4">
        {{ title }}
      </h1>
      <strong class="block font-bold typography-headline-3"
        >${{ price }}</strong
      >
      <div class="inline-flex items-center mt-4 mb-2">
        <SfRating size="xs" :value="rating?.rate" :max="5" />
        <SfCounter class="ml-1" size="xs"> {{ rating?.count }} </SfCounter>
      </div>
      <div>
        {{ description }}
      </div>
      <div class="py-4 mb-4 border-gray-200 border-y">
        <div class="items-start xs:flex">
          <div
            class="flex flex-col items-stretch xs:items-center xs:inline-flex"
          >
            <div class="flex border border-neutral-300 rounded-md">
              <SfButton
                variant="tertiary"
                :disabled="count <= min"
                square
                class="rounded-r-none p-3"
                :aria-controls="inputId"
                aria-label="Decrease value"
                @click="dec()"
              >
                <SfIconRemove />
              </SfButton>
              <input
                :id="inputId"
                v-model="count"
                type="number"
                class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                :min="min"
                :max="max"
                @input="handleOnChange"
              />
              <SfButton
                variant="tertiary"
                :disabled="count >= max"
                square
                class="rounded-l-none p-3"
                :aria-controls="inputId"
                aria-label="Increase value"
                @click="inc()"
              >
                <SfIconAdd />
              </SfButton>
            </div>
            <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
              <strong class="text-neutral-900">{{ max }}</strong> in stock
            </p>
          </div>
          <SfButton
            @click="
              handleAddToCart({
                item: { id, price, title, image },
                quantity: count,
              })
            "
            size="lg"
            class="w-full xs:ml-4"
          >
            <template #prefix>
              <SfIconShoppingCart size="sm" />
            </template>
            Add to cart
          </SfButton>
        </div>
      </div>
      <div class="flex first:mt-4">
        <SfIconPackage size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
        <p class="text-sm">
          Free shipping, arrives by Thu, Apr 7. Want it faster?
          <SfLink href="#" variant="secondary" class="mx-1">
            Add an address
          </SfLink>
          to see options
        </p>
      </div>
      <div class="flex mt-4">
        <SfIconWarehouse
          size="sm"
          class="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p class="text-sm">
          Pickup not available at your shop.
          <SfLink href="#" variant="secondary" class="ml-1">
            Check availability nearby
          </SfLink>
        </p>
      </div>
      <div class="flex mt-4">
        <SfIconSafetyCheck
          size="sm"
          class="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p class="text-sm">
          Free 30-days returns.
          <SfLink href="#" variant="secondary" class="ml-1"> Details </SfLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  SfButton,
  SfCounter,
  SfLink,
  SfRating,
  SfIconSafetyCheck,
  SfIconWarehouse,
  SfIconPackage,
  SfIconSell,
  SfIconShoppingCart,
  SfIconAdd,
  SfIconRemove,
  useId,
  SfIconShoppingCartCheckout,
} from "@storefront-ui/vue";
import { clamp } from "@storefront-ui/shared";
import { useCounter } from "@vueuse/core";
import type { CartItem } from "~/utils/types";

const props = defineProps([
  "id",
  "title",
  "price",
  "description",
  "rating",
  "image",
]);
const inputId = useId();
const min = ref(1);
const max = ref(999);
const { count, inc, dec, set } = useCounter(1, {
  min: min.value,
  max: max.value,
});
const cartItems = useCart("get");
function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}
const handleAddToCart = (cartItem: CartItem) => {
  useCart("add", cartItem);
};
</script>
