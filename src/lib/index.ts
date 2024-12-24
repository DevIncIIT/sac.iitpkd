import { BASE_URL } from "./urls";

// place files you want to import through the `$lib` alias in this folder.
export type EventResponse = {
    id: number;
    title: string;
    club_name: string;
    starts_at: string;
    description: string;
    venue: string;
};

export type AnnouncementResponse = {
    id: number;
    title: string;
    content: string;
    created_at: string;
};

export function image_link(
    id: number,
    attachment_type: "Announcement" | "Event" | "Thread"
): string {
    return `${BASE_URL}/media/attachment?id=${id}&attachment_type=${attachment_type}`;
}
