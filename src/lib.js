"use server"

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// following information should be hidden in git
const key = new TextEncoder().encode(process.env.SECRET_KEY);

export async function encrypt(payload) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1 day from now")
		.sign(key);
}

export async function decrypt(input){
	const { payload } = await jwtVerify(input, key, {
		algorithms: ["HS256"],
	});
	return payload;
}

export async function createCookie(userID, userEmail) {
	// user should be the following object
	const user = { userID, userEmail}

	// Create the session
	const expires = new Date();
	expires.setDate(expires.getDate()+1)
	const session = await encrypt({ user, expires });

	// Save the session in a cookie
	cookies().set("session", session, { expires, httpOnly: true });
}

export async function deleteSession() {
	// Destroy the session
	cookies().delete('session');
}

export async function getSession() {
	const session = cookies().get("session")?.value;
	if (!session) return null;
	return await decrypt(session);
}

export async function getSessionUserID() {
	const parsed = await getSession()
	// return invalid ID if no session cookie found
	if (!parsed) return -1

	const {userID, userEmail} = parsed.user

	return parseInt(String(userID), 10)
}

export async function updateSession(request) {
	const session = request.cookies.get("session")?.value;
	if (!session) return;

	// Refresh the session so it doesn't expire
	const parsed = await decrypt(session);
	parsed.expires = new Date();
	parsed.expires.setDate(parsed.expires.getDate()+1)
	const res = NextResponse.next();
	res.cookies.set({
		name: "session",
		value: await encrypt(parsed),
		httpOnly: true,
		expires: parsed.expires,
	});
	return res;
}