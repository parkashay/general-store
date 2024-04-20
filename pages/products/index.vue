<script setup>
    const products = await useProduct("multiple")
//     const products = [
//   {
//     id: "1",
//     title: "Lorem Ipsum Dolor Sit Amet",
//     price: "19.99",
//     image: "https://via.placeholder.com/150",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     rating: { rate: 4.5, count: 20 }
//   },
//   {
//     id: "2",
//     title: "Consectetur Adipiscing Elit",
//     price: "29.99",
//     image: "https://via.placeholder.com/150",
//     description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     rating: { rate: 4.2, count: 15 }
//   },
//   {
//     id: "3",
//     title: "Ut Labore Et Dolore",
//     price: "39.99",
//     image: "https://via.placeholder.com/150",
//     description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     rating: { rate: 4.8, count: 25 }
//   },
//   {
//     id: "4",
//     title: "Duis Aute Irure Dolor",
//     price: "49.99",
//     image: "https://via.placeholder.com/150",
//     description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     rating: { rate: 4.0, count: 10 }
//   },
//   {
//     id: "5",
//     title: "Excepteur Sint Occaecat",
//     price: "59.99",
//     image: "https://via.placeholder.com/150",
//     description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     rating: { rate: 4.6, count: 30 }
//   },
//   {
//     id: "6",
//     title: "Sed Do Eiusmod Tempor",
//     price: "69.99",
//     image: "https://via.placeholder.com/150",
//     description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     rating: { rate: 4.3, count: 18 }
//   },
//   {
//     id: "7",
//     title: "Nisi Ut Aliquip Ex Ea Commodo",
//     price: "79.99",
//     image: "https://via.placeholder.com/150",
//     description: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     rating: { rate: 4.9, count: 35 }
//   },
//   {
//     id: "8",
//     title: "Duis Aute Irure Dolor",
//     price: "89.99",
//     image: "https://via.placeholder.com/150",
//     description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     rating: { rate: 4.1, count: 12 }
//   }
// ];
</script>

<template>
    <h2 v-if="products.length > 0">All Products</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center my-6"
    >
      <ProductCard
        v-for="{ id, title, price, image, description, rating } in products"
        :key="title"
        :id="id"
        :title="title"
        :price="price"
        :image="image"
        :description="description"
        :rating="rating"
      />
    </div>
  </template>