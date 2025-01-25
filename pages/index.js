import { fetchProducts } from "../lib/api/products";
import Card from "../components/Card";
import Link from "next/link";
import styles from "../styles"

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
        <section className={`${styles.paddings} relative z-10`}>
            <div>
                <Link href={"/tags"}>All tags</Link>
            </div>

            <h1 className="text-2xl font-bold mb-6">Products List Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="flex justify-center">
                        <Card 
                            name={product.name}
                            stock={product.stock}
                            tags={product.tag} 
                        />
                    </div>
                        // <strong>Nome:</strong> {product.name} <br />
                        // <strong>Stock:</strong> {product.stock} <br />
                        // <strong>Tag:</strong> {product.tag.length > 0 ? product.tag.join(', '): 'No tag'} <br />
                        // <br />
                ))}
            </div>
        </section>
    );
}
