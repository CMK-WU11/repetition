export async function generateMetadata({ params }) {
	const produktId = (await params).produktId

	/* const response = await fetch("https://fiktivapi.com/produkter/" + produktId)
	const data = await response.json() */
	const data = {
		productName: "Dims",
	}

	return {
		title: data.productName
	}
}

export default async function Produkt({ params }) {

	return (
		<h1>Nu vises produkt med ID {/* params.produktId */}</h1>
	)
}

























/* "use client"

import { useParams } from "next/navigation"

export default function Produkt() {
	const params = useParams()
	const { produktId } = params

	return (
		<h1>Nu vises produkt med ID {produktId}</h1>
	)
} */