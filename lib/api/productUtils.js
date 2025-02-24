export function processProducts(products) {
    return products.map((product) => ({
        name: product.title,
        stock: product.variants.reduce((total,variant) => total + variant.inventory_quantity, 0),
        tag: product.tags && typeof product.tags ==='string' ? product.tags.split(', '): [],
        image: product.images.length > 0 ? product.images[0].src : null
    }))
}