"use client"

import Error from 'next/error'
import {admin, client} from "@/app/constants";


const CreateAccount = ({params}) => {
	// must match admin or client, case-sensitive part
	const user_type = params.user

	// if we want to make case-insensitive, can add a .toLowerCase()

	// using user_type, will have return different pages
	if (user_type === admin) {
		return (
			<p>
				Admin Create Account
			</p>
		)
	}

	if (user_type === client) {
		return (
			<p>
				Client Create Account
			</p>
		)
	}

	// none of the above user_types, meaning not a valid URL
	return <Error statusCode={404} />
}

export default CreateAccount