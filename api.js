const API_BASE_URL = "https://splendycraft-backend.onrender.com/api";

export async function getProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function getProduct(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        return products.find(p => p.id === id);
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export function getCategories(products) {
    if (!Array.isArray(products)) return [];
    return [
        ...new Set(products.map(product => product.category).filter(Boolean))
    ].sort();
}
