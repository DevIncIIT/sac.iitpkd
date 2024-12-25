<script lang="ts">
    import { image_link, type AnnouncementResponse } from "$lib";

    let { title, club_name, id, content, created_at }: AnnouncementResponse = $props();
</script>

<div class="main">
    <h4 class="text-xl">{club_name}</h4>
    <h2 class="text-2xl font-bold">{title}</h2>
    <p>Created at: {created_at}</p>
    <div class="image-holder">
        <img src={image_link(id, "Announcement")} alt="{title} by {club_name}">
    </div>
    <p>{content}</p>
</div>

<style>
    .main {
        background-color: #f6a55f93;
        display: flex;
        flex-direction: column;
        border-radius: 1em;
        padding: 1em;
        border-radius: 1em;
        border: black 2px solid;
    }
    .image-holder {
        aspect-ratio: 1;
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        display: flex;
        justify-content: center;
        border-radius: 1em;
        border: black 2px solid;
    }
    img {
        height: 100%;
    }
</style>
