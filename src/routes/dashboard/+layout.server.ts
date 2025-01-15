import { redirect, type Cookies } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import {
    GET_CLUBS_URL,
    GET_MY_CLUBS_URL,
    VIEW_ANNOUNCEMENT_URL,
    VIEW_EVENT_URL,
    WHOAMI_URL,
} from "$lib/server/urls";

async function getUser(cookies: Cookies) {
    const response = await fetch(WHOAMI_URL, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.get("jwt")}`,
        },
    });
    if (response.ok) {
        const { name, email } = await response.json();
        return { name, email };
    } else {
        throw redirect(302, "/login");
    }
}

async function getAnnouncements() {
    const response = await fetch(VIEW_ANNOUNCEMENT_URL, {
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

async function getEvents() {
    const response = await fetch(VIEW_EVENT_URL, {
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

async function get_club_data() {
    const club_response = await fetch(GET_CLUBS_URL);
    return await club_response.json();
}

async function get_my_clubs() {
    const response = await fetch(GET_MY_CLUBS_URL);
    console.log(await response.text());
    return await response.json();
}

export const load: LayoutServerLoad = async ({ cookies }) => {
    if (!cookies.get("jwt")) {
        throw redirect(302, "/login");
    }
    const response = await Promise.all([
        getUser(cookies),
        getAnnouncements(),
        getEvents(),
        get_club_data(),
        get_my_clubs(),
    ]);

    return {
        profile: response[0],
        announcements: response[1],
        events: response[2],
        clubs: response[3],
        my_clubs: response[4]
    };
};
