import { GET_FULL_CLUB_URL } from '$lib/server/urls';
import { header } from 'svelte-awesome/icons';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const clubid = params.clubid;

    const response = await fetch(GET_FULL_CLUB_URL + `?club_id=${clubid}`, {
        headers: {
            "Content-Type": 'application/json'
        }
    })

    const data = await response.json()

    console.log(data);

    // TODO replace with actual server code
    return {
        data
    }
};