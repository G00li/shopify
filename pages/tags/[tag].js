import { fetchProducts } from "../../lib/api/products";

export async function getServerSideProps ({params}){
    try{
        const products = await fetchProducts()
        const filteredProducts = products.filter((product) => product.tag.includes(params.tag))

        return {
            props: {filteredProducts, selectedTag: params.tag}
        }
    }
    catch(error){
        console.error(error); 
        return{
            props: {filteredProducts: [], selectTag: ''}
        }
    }
}

export default function ProductsNyTag({filteredProducts, selectedTag}){
    return(
        <div>
            <h1>Products with the tag: {selectedTag}</h1>
            {filteredProducts.length > 0 ? (
                <ul>
                    {filteredProducts.map((product,index) => (
                        <li key={index}>
                            <strong>Name: </strong> {product.name} <br />
                            <strong>Stock: </strong> {product.stock} <br />
                            <strong>Tag: </strong> {product.tag.join(', ')} <br />
                            <br />
                        </li>
                    ))}
                </ul>
            ):
            (
                <p>ohh... There is no tag available.</p>
            )}
        </div>
    )
}