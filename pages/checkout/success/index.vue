<template>
    <div class="min-h-[400px] flex flex-col my-16 gap-6">
        <h2>Thank you for Ordering !!</h2>
        <span class="text-center"> <SfIconCheckCircle /> Your order has been placed.</span>
        <div class="text-center"> The order is under the name of <span class="capitalize font-semibold">{{ userData?.firstName }} {{ userData?.lastName }}</span> </div>
        <span class="text-center">You will recieve a confirmation via a call at your phone number: <b>{{ userData?.phone }} </b> </span>
    </div>
</template>

<script setup lang="ts">
import { SfIconCheckCircle } from "@storefront-ui/vue";
const cart = useCart("get")
for (const item of cart.value) {
  useCart("remove", undefined, item.item.id)
}
const userData = ref({firstName: "", lastName: "", phone: ""})
onMounted(() => {
  const storedData = JSON.parse(localStorage.getItem("addressData") || "{}")
  if(!storedData.firstName || !storedData.lastName || !storedData.phone) navigateTo('/')
  userData.value = storedData
})
</script>