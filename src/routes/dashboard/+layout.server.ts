import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    if (!cookies.get('jwt')) {
        throw redirect(302, '/login');
    }
};