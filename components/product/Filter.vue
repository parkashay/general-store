<template>
  <SfAccordionItem v-model="isOpen" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Rating</p>
        <SfIconChevronLeft
          :class="['text-neutral-500', isOpen ? 'rotate-90' : '-rotate-90']"
        />
      </div>
    </template>
    <fieldset id="radio-rating">
      <SfListItem
        v-for="{ id, value, label } in ratingsValues"
        :key="id"
        tag="label"
        size="sm"
        class="!items-center py-4 md:py-1 px-1.5 bg-transparent hover:bg-transparent"
      >
        <template #prefix>
          <SfRadio
            v-model="ratingsModel"
            class="flex items-center"
            :checked="ratingsModel === value"
            :name="ratingsModel"
            :value="value"
            @click="ratingsModel = ratingsModel === value ? '' : value"
          />
        </template>
        <!-- TODO: Adjust the styling and remove block elements when/if span wrapper removed from ListItem -->
        <div class="flex flex-wrap items-center">
          <SfRating class="-mt-px" :value="Number(value)" :max="5" size="sm" />
          <span
            :class="[
              'mx-2 text-base md:text-sm',
              { 'font-medium': ratingsModel === value },
            ]"
            >{{ label }}</span
          >
        </div>
      </SfListItem>
    </fieldset>
  </SfAccordionItem>

  <!-- Filter by category -->
  <SfAccordionItem v-model="open" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Categories</p>
        <SfIconChevronLeft
          :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']"
        />
      </div>
    </template>
    <SfListItem
      v-for="category in categories"
      :key="category"
      tag="label"
      size="sm"
      :class="[
        'px-1.5 bg-transparent hover:bg-transparent',
        { 'font-medium': isItemActive(category) },
      ]"
    >
      <template #prefix>
        <SfCheckbox
          v-model="selectedFilters"
          class="flex items-center"
          :value="category"
        />
      </template>
      <p>
        <span class="mr-2 text-sm">{{ category }}</span>
      </p>
    </SfListItem>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  SfAccordionItem,
  SfRadio,
  SfRating,
  SfIconChevronLeft,
  SfListItem,
  useDisclosure,
  SfCheckbox,
} from "@storefront-ui/vue";
const { isOpen } = useDisclosure({ initialValue: true });
const ratingsModel = ref("");
const ratingsValues = ref([
  { id: "r1", label: "5", value: "5" },
  { id: "r2", label: "4 & up", value: "4" },
  { id: "r3", label: "3 & up", value: "3" },
  { id: "r4", label: "2 & up", value: "2" },
  { id: "r5", label: "1 & up", value: "1" },
]);
const filterModel = defineModel<{category: string[], rating: number}>()
watch(ratingsModel, () => {
  filterModel.value!.rating = Number(ratingsModel.value)
});
const categories = await getAllCategories();

const open = ref(true);
const selectedFilters = ref<string[]>([]);
const isItemActive = (selectedValue: string) => {
  return selectedFilters.value?.includes(selectedValue);
};
watch(selectedFilters, () => {
 filterModel.value!.category = selectedFilters.value
});
</script>
