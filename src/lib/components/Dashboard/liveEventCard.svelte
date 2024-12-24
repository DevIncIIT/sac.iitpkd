<script lang="ts">
    import { image_link, type EventResponse } from "$lib";

    export let event_info: EventResponse;
</script>

<div class="card w-[25rem] p-3 px-4">
    <div class="card_header flex justify-between items-center pb-2">
        <div class="author flex gap-3">
            <img src={image_link(event_info.id, "Event")} alt="profile-pic" class="rounded-5" style="height: 3rem"/>
            <div class="card_title">
                <p class="club_name text-sm text-gray-600 font-medium">{event_info.club_name}</p>
                <p class="event_name text-xl font-semibold">{event_info.title}</p>
            </div>
        </div>
        <div class="whitebar">{event_info.starts_at}</div>
    </div>
    <div class="card_body text-justify mt-2">
        {event_info.description}
    </div>
</div>

<style>
    .card_header{
        border-bottom: 2px solid #565759;
    }
    .card{
        background-color: #fa9033;
        border-radius: 1rem;
    }
</style>