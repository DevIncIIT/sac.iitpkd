<script>
    import { goto } from "$app/navigation";

    export let clubImage, clubName, clubId;
</script>

<div class="clubcard" on:click={goto(`/dashboard/clubs/${clubId}`)}>
    <div class="img" style="background-image: url({clubImage});"></div>
    <div class="name text-center text-lg font-medium">{clubName}</div>
</div>

<style>
    .clubcard{
        cursor: pointer;
    }
    .img{
        width: 15rem;
        height: 15rem;
        background-size: cover;
        background-position: center;
        border-radius: 1rem;
    }
</style>