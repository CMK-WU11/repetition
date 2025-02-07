# Dokumentation for Din Mægler

Brian Emilius, WU11

Jeg har valgt at lægge min opgave på nettet. Se den her:

[https://briansmaegler.onrender.com](https://briansmaegler.onrender.com)

Brugere til systemet:

| username | password |
|-|-|
|minnyebruger | 1234 |

## Tech-stack
* [**NextJS**](https://nextjs.org)  
Jeg har valgt at bruge NextJS, fordi ...  
Jeg kunne have valgt VueJS, som er et andet frontend framework, men ...
* [**TailwindCSS**](https://tailwindcss.com/)  
Jeg bruger Tailwind fordi ...
* [**React Icons**](https://react-icons.github.io)  
blah blah...

## Kode-eksempel
Jeg har valgt et eksempel fra ...

[Login action](/src/actions/login.js)
```js
const schema = z.object({
	identifier: z.string().min(1, { message: "Du skal udfylde en email" }).email({ message: "Ugyldig email" }),
	password: z.string().min(1, { message: "Du skal udfylde et password" })
})

const validate = schema.safeParse({
	identifier,
	password
})

if (!validate.success) {
	return {
		formData: {
			identifier,
			password
		},
		errors: validate.error.format()
	}
}
```

Jeg bruger biblioteket `Zod` til at lave et schema, så jeg kan validere email og password fra login-formularen.

Først laver jeg et skema som indeholder reglerne for hvordan felterne i formularen skal se ud.  
Derefter parser jeg et objekt med felterne fra formularen op mod schemaet.  
Hvis valideringen ikke lykkes returnerer funktionen et fejl-objekt.