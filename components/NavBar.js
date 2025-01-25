import Link from "next/link";

const NavBar = () => {
	return (
		<nav className="bg-gray-800 text-white py-4">
			<div className="container mx-auto flex justify-between items-center">
				
				<h1 className="text-2xl font-bold">
					<Link href="/" >ShopMy</Link>
				</h1>

				<div className="flex space-x-4">
					<Link href="/" className="hover:text-gray-300">All Products</Link>
					<Link href="/tags" className="hover:text-gray-300">Tags</Link>
				</div>

			</div>
		</nav>
	)
}

export default NavBar;