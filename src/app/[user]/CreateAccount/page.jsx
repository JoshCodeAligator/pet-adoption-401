"use client"

import Error from 'next/error'
import {client} from "@/app/constants";
import ClientCreateAccountController from "@CreateAccount/client/ClientCreateAccountController";


const CreateAccount = ({params}) => {
	// must match admin or client, case-sensitive part
	const user_type = params.user

	// if we want to make case-insensitive, can add a .toLowerCase() to params.user

	// using user_type, will have return different pages
	// if (user_type === admin) {
	// 	return (
	// 		<AdminCreateAccountController/>
	// 	)
	// }

	if (user_type === client) {
		return (
			<ClientCreateAccountController/>
		)
	}

	// none of the above user_types, meaning not a valid URL
	return <Error statusCode={404} />
}

export default CreateAccount