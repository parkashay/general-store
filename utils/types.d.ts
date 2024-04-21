export type Product = {
    id: string
    title: string
    price: number
    category: string
    description: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}

export type CartItem = {
    item: Partial<Product>;
    quantity: number;
  }