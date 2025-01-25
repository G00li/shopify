import { fetchProducts } from "../lib/api/products";
import Card from "../components/Card";
import Link from "next/link";

export async function getServerSideProps() {
    try {
        const products = await fetchProducts(); 
        return {
            props: { products },
        };
    } catch (error) {
        console.error(error);
        return {
            props: { products: [] },
        };
    }
}

export default function ProductsPage({ products }) { 
    return (
        <section class="productpagesection">
            <div>
                <Link href={"/tags"}>All tags</Link>
            </div>

            <h1 className="text-2xl font-bold mb-6">Products List Page</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="flex justify-center">
                        <Card 
                            name={product.name}
                            stock={product.stock}
                            tags={product.tag} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}