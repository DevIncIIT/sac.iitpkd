import { REGISTER_URL } from '$lib/urls';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        if (!(name && email && password)) {
            console.log("Invalid form data");
            return {
                success: false,
                message: "Invalid form data"
            };
        }
        const response = await fetch(REGISTER_URL, {
            body: JSON.stringify({
                name,
                email,
                password
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const responseJson = await response.json();
        cookies.set("jwt", responseJson.access_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
        return redirect(302, "/dashboard");
	}
} satisfies Actions;