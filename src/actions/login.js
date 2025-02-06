"use server"

export default async function Login(prevState, formData) {
	const identifier = formData.get("identifier")
	const password = formData.get("password")

	if (!identifier.length || !password.length) {
		return { error: "Du skal udfylde begge felter" }
	}
}