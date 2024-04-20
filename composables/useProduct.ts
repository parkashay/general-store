export const useProduct = async ( type: "single" | "multiple", id?:string) => {
    if (type === "single") {
        try {
            const product = await fetch(`${API_URL}/products/${id}`)
            return  (await product.json())
        }catch(err) {
            return {}
        }
    }
    if (type === "multiple") {
        try {
            const products = await fetch(`${API_URL}/products`)
            return  (await products.json())
        }catch(err) {
            return []
        }
    }
}

export const productsByCategory = async (type: string) => {
    try {
        const products = await fetch(`${API_URL}/products/category/${type}`)
        return  (await products.json())
    }catch(err) {
        return []
    }
}

export const getAllCategories = async () => {
    try {
        const categories = await fetch(`${API_URL}/products/categories`)
        return  (await categories.json())
    }catch(err) {
        return []
    }
}