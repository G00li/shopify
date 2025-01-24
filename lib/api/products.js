import { processProducts } from "./productUtils";

export async function fetchProducts() {
    try{
        const response = await fetch(
            'https://shopicruit.myshopify.com/admin/products.json?access_token=c32313df0d0ef512ca64d5b336a0d7c6'
        )
        if(!response.ok){
            throw new Error (`Failed to fetch data ${response.status}`)
        }
        const data = await response.json()
        return processProducts(data.products); 
    }

    catch(error){
        console.log('Error fetching products', error)
        return []
    }

}