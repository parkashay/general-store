export type Product = {
    id: string
    title: string
    price: string
    category: string
    description: string
    image: string
    rating: {
        rate: string,
        count: string
    }
}