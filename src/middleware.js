import {getSession, updateSession} from "./lib";

export async function middleware(request) {

	const session = await getSession()

	// redirect in case of attempt to BookAppointment without being logged in
	if (!session && request.nextUrl.pathname.startsWith('/BookAppointment')) {

		// redirect to login page
		return Response.redirect(new URL('/login', request.url))
	}

	// refresh cookie expiry when don't get redirected (means session was not null)
	// put this down here and not at top to allow future changes of user type to also be adding to checking
	return await updateSession(request);
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - images (local image files)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|images).*)',
	],
}