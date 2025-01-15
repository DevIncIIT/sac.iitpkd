import { CLUB_APPL_URL, GET_FULL_CLUB_URL } from '$lib/server/urls';
import { header } from 'svelte-awesome/icons';
import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';

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

export const actions: Actions = {
    join: async ({request, cookies}) => {
        console.log("kkkkkk")
        const formData = await request.formData()
        const club_id = formData.get('clubid') as string;
        const response = await fetch(CLUB_APPL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cookies.get('jwt')}`,
            },
            body: JSON.stringify({
                club_id: parseInt(club_id)
            })
        })
        return await response.json();
    }
};