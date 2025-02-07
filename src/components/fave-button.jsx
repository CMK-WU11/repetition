"use client"
import { useEffect, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

export default function FaveButton({ token, uid, id }) {
	const [isFaved, setIsFaved] = useState(false)

	async function clickHandler(event) {
		const userResponse = await fetch("https://dinmaegler.onrender.com/users/me", {
			headers: {
				Authorization: "Bearer " + token
			}
		})
		const { homes } = await userResponse.json()
		const homeIndex = homes.indexOf(id)

		if (homeIndex === -1) {
			homes.push(id)
		} else {
			homes.splice(homeIndex, 1)
		}

		const response = await fetch(`https://dinmaegler.onrender.com/users/${uid}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				Authorization: "Bearer " + token
			},
			body: JSON.stringify({
				homes
			})
		})

		if (response.ok) {
			setIsFaved(!isFaved)
		}

	}

	useEffect(function () {
		fetch("https://dinmaegler.onrender.com/users/me", {
			headers: {
				Authorization: "Bearer " + token
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log("user faved homes", data.homes)
				setIsFaved(data.homes.some(element => element === id))
			})
	}, [])

	return (
		<button onClick={clickHandler}>{isFaved ? <FaHeart /> : <FaRegHeart />}</button>
	)
}
