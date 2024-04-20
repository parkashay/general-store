<template>
  <div class="w-full flex justify-end">
    <h6 class="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase font-semibold">
      Sort by
    </h6>
    <div class="px-4">
      <SfSelect v-model="selected" aria-label="Sort by" @change="handleSort">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </SfSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfSelect } from "@storefront-ui/vue";
import { ref } from "vue";
const options = ref([
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
]);
const selected = ref(options.value[0].value);
const model = defineModel();
const handleSort = (event: any) => {
  model.value = event?.target.value;
};
</script>
