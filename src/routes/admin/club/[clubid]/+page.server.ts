import { GET_CLUBS_URL, VIEW_CLUB_APPL_URL } from "$lib/server/urls";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, parent, cookies }) => {
    const club_id = params.clubid;
    const clubs = await get_club_data();
    const applications = await get_club_applications(club_id, cookies);
    console.log(applications);

    return {
        applications,
        club_data: {
            name: club_id,
            image: `https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg`,
            description:
                "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            heads: [
                {
                    name: "krawat",
                    email: "krawat@iitpkd.ac.in",
                    contact_number: "9876543210",
                },
                {
                    name: "krawat",
                    email: "krawat@iitpkd.ac.in",
                    contact_number: "9876543210",
                },
                {
                    name: "krawat",
                    email: "krawat@iitpkd.ac.in",
                    contact_number: "9876543210",
                },
                {
                    name: "krawat",
                    email: "krawat@iitpkd.ac.in",
                    contact_number: "9876543210",
                },
            ],
            email: `${club_id}@iitpkd.ac.in`,
        },
    };
};

async function get_club_data() {
    const club_response = await fetch(GET_CLUBS_URL);
    return await club_response.json();
}

async function get_club_applications(club_id: string, cookies: any) {
    const application_response = await fetch(
        `${VIEW_CLUB_APPL_URL}?club_id=${club_id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cookies.get('jwt')}`
            }
        }
    );
    return await application_response.json();
}
