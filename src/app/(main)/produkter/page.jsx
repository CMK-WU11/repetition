import Link from "next/link";

export default function Produkter() {
	return (
		<>
			<h1>Produkter</h1>
			<ul>
				<li>
					<Link href="/produkt/1">Produkt 1</Link>
				</li>
				<li>
					<Link href="/produkt/2">Produkt 2</Link>
				</li>
				<li>
					<Link href="/produkt/3">Produkt 3</Link>
				</li>
			</ul>
		</>
	)
}