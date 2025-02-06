export default function Ejendom({ ejendom }) {
	return (
		<li>
			<h2>{ejendom.adress1}, {ejendom.city}</h2>
			<p>DKK {ejendom.price}</p>
		</li>
	)
}