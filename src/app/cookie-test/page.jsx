import {createCookie, deleteSession, getSession} from "../../lib";
import {redirect} from "next/navigation";
import validateLogin from "@login/LoginAPI";


async function login(formData) {
	const {found, error, data} = await validateLogin(
		formData.get("email"), formData.get("***REMOVED***"))

	if (found) {
		await createCookie(data, formData.get("email"))
	}

}

const Page = async () => {
	const session = await getSession();
	return (
		<section>
			<form
				action={async (formData) => {
					"use server";
					await login(formData);
					// alert("Login success?")
					redirect("/cookie-test");
				}}
			>
				<input type="email" placeholder="Email" name="email"/>
				<br/>
				<input type="***REMOVED***" placeholder="Password" name="***REMOVED***"/>
				<br/>
				<button type="submit">Login</button>
			</form>
			<form
				action={async () => {
					"use server";
					await deleteSession();
					// alert("Deleted Cookie")
					redirect("/cookie-test");
				}}
			>
				<button type="submit">Logout</button>
			</form>
			<pre>{JSON.stringify(session, null, 2)}</pre>
		</section>
	);
}

export default Page

