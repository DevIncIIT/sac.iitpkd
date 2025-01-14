import { VIEW_EVENT_URL } from "$lib/server/urls";

export const load = async ()=> {
    const response = await fetch(VIEW_EVENT_URL);
    const events = await response.json();
    return {
        events
    };
}