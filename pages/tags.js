import { fetchProducts } from "../lib/api/products";
import Link from "next/link";

export async function getServerSideProps() {
	try {
		const products = await fetchProducts()
		const allTags = [...new Set(products.flatMap(product => product.tag))]

		return {
			props: { allTags }
		}
	}
	catch (error) {
		console.error(error)
		return {
			props: { allTags: [] }
		}
	}
}

export default function TagsPage({ allTags }) {
	return (
		<div>
			<div>
				<Link href={'/'}>Home</Link>
			</div>
			<h1>Select a tag</h1>
			<ul>
				{allTags.length > 0 ? (
					allTags.map((tag, index) => (
						<li key={index}>
							<Link href={`/tags/${tag}`}>{tag}</Link>
						</li>
					))):
					(<li>No tags available.</li>)
				}
			</ul>
		</div>
	)
}