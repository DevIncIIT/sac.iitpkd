import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({cookies}) => {
    if(cookies.get('jwt')){
        return{
            loggedIn: true
        }
    }
    return {
        loggedIn: false
    }
};