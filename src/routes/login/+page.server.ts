import { LOGIN_URL } from "$lib/server/urls";
import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({cookies, request}) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
        
        if(!(email && password)) {
            return {
                success: false,
                message: "Invalid form data"
            };
        }

        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        
        if(response.ok) {
            const {access_token} = await response.json();
            cookies.set('jwt', access_token, {path: '/', maxAge: 60 * 60 * 24 * 7});
            return redirect(302, '/dashboard');
        } else {
            return {
                success: false,
                message: "Invalid email or password"
            }
        }
    }
}