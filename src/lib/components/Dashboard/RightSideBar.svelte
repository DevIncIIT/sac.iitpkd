<script lang="ts">
    import type { AnnouncementResponse, EventResponse } from "$lib";
    import AnnouncementSideCard from "./AnnouncementSideCard.svelte";
    import LiveEventCard from "./liveEventCard.svelte";

    // export let userName; // = 'Username';

    export let event_info: EventResponse;

    export let announcement: AnnouncementResponse;
</script>

<div class="right-sidebar">
    <!-- <div class="d-flex justify-content-end items-center mr-4 mt-4">
        <span style="color: #5E6060;" class="fs-5 fw-semibold">{userName}</span>
        <img src="/placeholder.png" alt="profile-pic" class="rounded-5 ml-4" />
    </div> -->
    <div class="live_events">
        <p class="text-3xl my-3">Live Events</p>
        {#if event_info}
            <LiveEventCard {event_info} />
        {/if}
    </div>
    <div class="live_events">
        <p class="text-3xl my-3">Announcements</p>
        <AnnouncementSideCard {announcement} />
    </div>
</div>

<style>
    .right-sidebar {
        padding-inline: 3rem;
    }
</style>
