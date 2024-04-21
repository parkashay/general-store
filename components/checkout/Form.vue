<template>
  <form
    class="p-4 flex gap-4 flex-wrap text-neutral-900 max-w-[700px]"
    @submit.prevent="onSubmit"
  >
    <h2 class="w-full typography-headline-4 md:typography-headline-3 font-bold">
      Address Details
    </h2>
    <label
      class="w-full basis-1/3 md:w-auto flex-grow flex flex-col gap-0.5 "
    >
      <span class="typography-text-sm font-medium">First Name</span>
      <input
        class="border border-slate-400 px-2 py-2 rounded-lg"
        name="firstName"
        required
      />
    </label>
    <label class="w-full basis-1/3 md:w-auto flex-grow flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Last Name</span>
      <input
        class="border border-slate-400 px-2 py-2 rounded-lg"
        name="lastName"
        required
      />
    </label>
    <label class="w-full basis-1/2 flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Phone</span>
      <input
        class="border border-slate-400 px-2 py-2 rounded-lg"
        name="phone"
        required
      />
    </label>
    <label class="basis-1/3">
      <span class="pb-1 text-sm font-medium text-neutral-900 font-body">
        Country
      </span>
     <select name="country" class="px-4 py-2 bg-white border border-black rounded-lg w-full">
       <option v-for="{label, value} in options" :value="value" > {{ label }} </option>
     </select>
    </label>
   
      <label class="flex flex-col basis-1/2">
        <span class="typography-text-sm font-medium">State</span>
        <input
        class="border border-slate-400 px-2 py-2 rounded-lg"
        name="state"
        required
      />
      </label>
   
    <label class="flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">City</span>
      <input
        class="border border-slate-400 px-2 py-2 rounded-lg"
        name="city"
        required
      />
    </label>
    <label class="w-full flex flex-col gap-0.5 md:w-[120px]">
      <span class="typography-text-sm font-medium">ZIP Code</span>
      <input
        class="border border-slate-400 px-2 py-2 rounded-lg"
        name="zipCode"
        required
        placeholder="12345"
      />
    </label>

    <div class="w-full flex gap-4 mt-4 md:mt-0 md:justify-end">
      <SfButton type="reset" variant="secondary" class="w-full md:w-auto"
        >Clear all</SfButton
      >
      <SfButton type="submit" class="w-full md:w-auto">Proceed</SfButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  SfSelect,
  SfInput,
  SfButton,
  SfIconUnfoldMore,
} from "@storefront-ui/vue";

// e a list of countries you want to support

const options = [
  { label: "Nepal", value: "nepal" },
  { label: "China", value: "china" },
  { label: "India", value: "india" },
  { label: "Unites States", value: "usa" },
];

const streetIsValid = ref(true);

const onSubmit = (e: Event) => {
  const form = e.target as HTMLFormElement;

  const formData = new FormData(form);
  const formJSON = Object.fromEntries(formData.entries());
  localStorage.setItem("addressData", JSON.stringify(formJSON));
  navigateTo("/checkout/payment");
};
</script>
