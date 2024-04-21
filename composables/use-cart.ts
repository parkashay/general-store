import type { CartItem } from "~/utils/types";

export const useCart = (
  action: "add" | "remove" | "get",
  item?: CartItem,
  id?: string
) => {
  const cart = useState<CartItem[]>("cart", () => []);

  if (action === "get") {
    return cart;
  }

  const addToCart = (item: CartItem) => {
    // TODO: persist the cart using localstorage
    // const previousItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    // const newItems = [...previousItems, item]
    // check if already exists
    const index = cart.value.findIndex((c) => c.item.id === item.item.id);
    if (index === -1) {
      cart.value = [...cart.value, item];
    } else {
      cart.value[index].quantity += item.quantity;
    }
  };

  const removeFromCart = (id: string) => {
    cart.value = cart.value.filter((c) => c.item.id !== id);
  };

  switch (action) {
    case "add":
      addToCart(item!);
      break;
    case "remove":
      removeFromCart(id!);
      break;
    default:
      break;
  }
  return cart;
};
