import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({cookies}) => {
    cookies.delete('jwt', {path: '/'})
    redirect(302, '/');
};