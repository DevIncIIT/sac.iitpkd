<script lang="ts">
    type Announcement = {
        title: string;
        club_name: string;
        image: string;
        description: string;
    };
    let { title, club_name, image, description }: Announcement = $props();
</script>

<div class="main">
    <h4>{club_name}</h4>
    <h2>{title}</h2>
    <div class="image-holder">
        <img src={image} alt="{title} by {club_name}">
    </div>
    <p>{description}</p>
</div>

<style>
    .main {
        background-color: #f6a55f;
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
