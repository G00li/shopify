import { fetchProducts } from "../../lib/api/products";
import Card from "../../components/Card";
import Link from "next/link";

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
        <section>
            <div>
                <Link href={"/"} className="text-blue-600 underline">Home</Link>
            </div>
            <h1 className="text-2xl font-bold mb-6">Products with the tag: <span className="text-blue-800">{selectedTag}</span></h1>
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product,index) => (
                        <div key={index} className="flex justify-center">
                            <Card
                                name = {product.name}
                                stock = {product.stock}
                                tags = {product.tag}
                            />
                        </div>
                    ))}
                </div>
            ):
            (
                <p className="text-gray-500">Ohh... There are no products with this tag.</p>
            )}
        </section>
    )
}