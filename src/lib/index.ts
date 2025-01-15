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
    club_name: string;
    created_at: string;
};

export type ClubData = {
    name: string;
    image: string;
    description: string;
    heads: {
        name: string;
        email: string;
        contact_number: string;
    }[];
    email: string;
};

export function image_link(
    id: number,
    attachment_type: "Announcement" | "Event" | "Thread" | "Club"
): string {
    return `/cdn?id=${id}&attachment_type=${attachment_type}`;
}


let currDate = new Date();
export function time2human(d: Date) {
    return Math.floor(
        (currDate.getTime() - d.getTime()) / (1000 * 3600 * 24)
    ) >= 1
        ? `${Math.floor((currDate.getTime() - d.getTime()) / (1000 * 3600 * 24))} days ago`
        : Math.floor((currDate.getTime() - d.getTime()) / (1000 * 3600)) >=
            1
          ? `${Math.floor((currDate.getTime() - d.getTime()) / (1000 * 3600))} hours ago`
          : Math.floor((currDate.getTime() - d.getTime()) / (1000 * 60)) >=
              1
            ? `${Math.floor((currDate.getTime() - d.getTime()) / (1000 * 60))} minutes ago`
            : `${Math.floor((currDate.getTime() - d.getTime()) / 1000)} seconds ago`;
}