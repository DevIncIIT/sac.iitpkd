// make a load function get list of clubs and returns an array of club names and ids
import { CREATE_EVENT_URL, FILE_UPLOAD_URL } from "$lib/server/urls";
import { redirect } from "@sveltejs/kit";

// load clubs
import type { LoadEvent } from "@sveltejs/kit";

export const load = async ({ parent }: LoadEvent) => {
    const response = await parent();
    const clubs = response.clubs;
    return {
        clubs: clubs.map((club: any) => ({
            value: club.id.toString(),
            label: club.name,
        })),
    };
}

export const actions = {
    default: async ({ cookies, request }: { cookies: any, request: Request }) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const description = formData.get('content');
        const club = formData.get('club') as string;
        const image = formData.get('image') as File;
        const date = formData.get('date') as string;
        const time = formData.get('time') as string;
        const venue = formData.get('venue') as string;
        if (!(title && description && club && date && venue)) {
            return {
                success: false,
                message: "Invalid form data"
            };
        }
        console.log(title, description, club, date, time, venue);
        console.log(`${date}T${time}:00+5:30`)

        const response = await fetch(CREATE_EVENT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookies.get('jwt')}`
            },
            body: JSON.stringify({
                title,
                description,
                club_id: parseInt(club),
                starts_at: `${date}T${time}:00+05:30`,
                venue
            })
        })
        console.log(response)

        if(response.ok) {
            const event_response = await response.json();
            console.log(event_response)
            const event_id = event_response.data;
            console.log(event_id);
            const formData = new FormData();
            formData.append('event_id', event_id);
            formData.append('file', image);
            const file_upload_response = await fetch(FILE_UPLOAD_URL, {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'multipart/form-data'
                },
                body: formData
            })
            if(file_upload_response.ok) {
                console.log(await file_upload_response.text());
                return redirect(302, '/dashboard');
            } else {
                console.log(await file_upload_response.text());
                return "sorry";
            }
        } else {
            console.log(response.status);
            const message = await response.text();
            console.log(message);
            return {
                success: false,
                message: "Invalid email or password"
            }
        }
    }
}