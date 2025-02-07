import { cookies } from "next/headers"
import FaveButton from "./fave-button"

export default async function Ejendom({ ejendom }) {
	const cookieStore = await cookies()
	const token = cookieStore.get("repe_token")
	const uid = cookieStore.get("repe_uid")

	return (
		<li>
			<h2>{ejendom.adress1}, {ejendom.city} <FaveButton token={token.value} uid={uid.value} id={ejendom.id} /></h2>
			<p>DKK {ejendom.price}</p>
		</li>
	)
}