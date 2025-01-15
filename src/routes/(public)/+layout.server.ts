import { PUBLIC_ANNOUNCEMENT_URL } from "$lib/server/urls";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

async function getAnnouncements() {
    const response = await fetch(PUBLIC_ANNOUNCEMENT_URL, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw redirect(302, "/serverdown");
    }
}

export const load: LayoutServerLoad = async ({ cookies }) => {
    if (cookies.get("jwt")) {
        return {
            loggedIn: true,
            announcements: await getAnnouncements(),
        };
    }
    return {
        loggedIn: false,
        announcements: await getAnnouncements(),
    };
};
