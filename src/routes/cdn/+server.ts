import { BASE_URL } from "$lib/server/urls";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
    const id = url.searchParams.get("id");
    const attachment_type = url.searchParams.get("attachment_type");
    if (!id || !attachment_type) {
        return new Response("Invalid request", { status: 400 });
    }
    const resp = await fetch(
        `${BASE_URL}/media/attachment?id=${id}&attachment_type=${attachment_type}`
    );
    console.log(resp);
    return new Response(resp.body, {
        headers: {
            "Content-Type": resp.headers.get("Content-Type") ?? "",
            "Cache-Control": "max-age=31536000",
        },
    });
};
