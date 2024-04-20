<template>
  <form
    ref="referenceRef"
    role="search"
    class="relative"
    @submit.prevent="submit"
  >
    <SfInput
      ref="inputRef"
      v-model="inputModel.title"
      aria-label="Search"
      placeholder="Search 'jacket' or 'bracelet'... "
      @focus="open"
      @keydown="handleInputKeyDown"
    >
      <template #prefix><SfIconSearch /></template>
      <template #suffix>
        <button
          v-if="inputModel.title"
          type="button"
          aria-label="Reset search"
          class="flex rounded-md focus-visible:outline focus-visible:outline-offset"
          @click="reset"
        >
          <SfIconCancel /></button
      ></template>
    </SfInput>
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
      <div
        v-if="isLoadingSnippets"
        class="flex items-center justify-center w-full h-20 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <SfLoaderCircular />
      </div>
      <ul
        v-else-if="snippets.length > 0"
        ref="dropdownListRef"
        class="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <li v-for="{ product } in snippets" :key="product.id">
          <SfListItem
            tag="button"
            type="button"
            class="flex justify-start"
            @click="() => selectValue(product.title, product.id)"
            @keydown.enter.space.prevent="
              selectValue(product.title, product.id)
            "
          >
            <p class="text-left">
              {{ product.title }}
            </p>
          </SfListItem>
        </li>
      </ul>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { type Ref, ref, watch } from "vue";
import { offset } from "@floating-ui/vue";
import { watchDebounced } from "@vueuse/shared";
import { unrefElement } from "@vueuse/core";
import {
  SfIconCancel,
  SfIconSearch,
  SfInput,
  SfListItem,
  SfLoaderCircular,
  useDisclosure,
  useDropdown,
  useTrapFocus,
} from "@storefront-ui/vue";
import type { Product } from "~/utils/types";
const inputModel = ref({ title: "", id: "" });
const inputRef = ref();
const dropdownListRef = ref();
const isLoadingSnippets = ref(false);
const snippets = ref<{ product: Product }[]>([]);
const { isOpen, close, open } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: "bottom-start",
  middleware: [offset(4)],
});
const { focusables: focusableElements } = useTrapFocus(
  dropdownListRef as Ref<HTMLElement>,
  {
    trapTabs: false,
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: false,
  }
);

const submit = () => {
  close();
  navigateTo("/products/" + inputModel.value.id);
};

const focusInput = () => {
  const inputEl = unrefElement(inputRef)?.querySelector("input");
  inputEl?.focus();
};

const reset = () => {
  inputModel.value.title = "";
  inputModel.value.id = "";
  snippets.value = [];
  close();
  focusInput();
};

const selectValue = (phrase: string, id: string) => {
  inputModel.value.title = phrase;
  inputModel.value.id = id;
  close();
  focusInput();
};

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape") reset();
  if (event.key === "ArrowUp") {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[focusableElements.value.length - 1].focus();
    }
  }
  if (event.key === "ArrowDown") {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[0].focus();
    }
  }
};

watch(inputModel.value, () => {
  if (inputModel.value.title === "") {
    reset();
  }
});

watchDebounced(
  inputModel.value,
  () => {
    if (inputModel.value.title.length > 2) {
      const getSnippets = async () => {
        open();
        isLoadingSnippets.value = true;
        try {
          const data = await autoCompleteRequest(inputModel.value.title);
          snippets.value = data;
        } catch (error) {
          close();
          console.error(error);
        }
        isLoadingSnippets.value = false;
      };

      getSnippets();
    }
  },
  { debounce: 500 }
);

const products: Product[] = await useProduct("multiple");
const delay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
const autoCompleteRequest = async (phrase: string) => {
  await delay();
  const results = products
    .filter((product) =>
      product.title.toLowerCase().includes(phrase.toLowerCase())
    )
    .map((product) => {
      return { product };
    });
  return results;
};
</script>
