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
		<section className="min-h-screen bg-gray-50 p-8">
			<div className="mb-6">
				<Link href={'/'} className="text-blue-600 underline">Home</Link>
			</div>
			<h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Select a tag</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
				{allTags.length > 0 ? (
					allTags.map((tag, index) => (
						<Link key={index} href={`/tags/${tag}`} className="block text-center bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 p-3 hover:bg-blue-50 transition">
							<span className="text-gray-700 font-medium">{tag}</span>
						</Link>
					))):
					(<div className="col-span-full text-center  text-gray-600">No tags available.</div>)
				}
			</div>
		</section>
	)
}	