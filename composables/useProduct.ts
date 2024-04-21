export const useProduct = async (type: "single" | "multiple", id?: string) => {
  if (type === "single") {
    try {
      // dummy product
      // const product = productsItems.find((item) => item.id === id);
      // return product;

      // actual api call
      const product = await fetch(`${API_URL}/products/${id}`)
      return  (await product.json())
    } catch (err) {
      return {} as any;
    }
  }
  if (type === "multiple") {
    try {
      // dummy products
      // const products = productsItems;
      // return products;

      // actual api call
      const products = await fetch(`${API_URL}/products`)
      return  (await products.json())
    } catch (err) {
      return [];
    }
  }
};

export const productsByCategory = async (type: string) => {
  try {
    const products = await fetch(`${API_URL}/products/category/${type}`);
    return await products.json();
  } catch (err) {
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const categories = await fetch(`${API_URL}/products/categories`);
    return await categories.json();
  } catch (err) {
    return [];
  }
};
