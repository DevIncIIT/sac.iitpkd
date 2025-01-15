import { ACCEPT_CLUB_APPL_URL } from "$lib/server/urls";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    return await fetch(ACCEPT_CLUB_APPL_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.get('jwt')}`
        },
        body: JSON.stringify(await request.json()),
    });
};
