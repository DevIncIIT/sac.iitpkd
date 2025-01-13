import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const clubname = params.clubname;
    // TODO replace with actual server code
    return {
        name: clubname,
        image: `https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg`,
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
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
        email: `${clubname}@iitpkd.ac.in`,
    }
};