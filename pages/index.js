import { fetchProducts } from "../lib/api/products";

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
        <div>
            <h1>Products List Page</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {product.name} <br />
                        <strong>Stock:</strong> {product.stock} <br />
                        <strong>Tag:</strong> {product.tag.length > 0 ? product.tag.join(', '): 'No tag'} <br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
