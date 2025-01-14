<script lang="ts">
    import { image_link, type AnnouncementResponse } from "$lib";
    export let announcement: AnnouncementResponse;
</script>

<div class="card">
    <div class="card_header flex flex-col pb-2">
        <div class="author flex gap-3 items-center">
            <img src={image_link(announcement.id, "Announcement")} alt="profile-pic" class="rounded-5" style="height: 3rem"/>
            <div class="card_title">
                <p>
                    <span class="text-xl text-gray-700 block">{announcement.title}</span>
                    <span class="text-lg font-semibold">{announcement.club_name}</span>
                </p>
            </div>
        </div>
        <div class="content text-lg ml-[0.5rem]"> 
            {announcement.content}
        </div>
    </div>
</div>

<style>
    .card{
        border-left: 8px solid #fa9033;
        padding: 1rem;
        padding-left: 1.5rem;
    }
</style>