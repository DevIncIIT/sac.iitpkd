<script>
    import { goto } from "$app/navigation";
    import AnnouncementCard from "$lib/components/AnnouncementCard.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    export let data;
</script>

<main class="px-4">
    <div class="flex justify-between pr-4">
        <h1 class="text-4xl font-bold">Announcements</h1>
        <Button type="button" on:click={() => goto("/dashboard/announcements/create")}>Create Announcement</Button>
    </div>
    <div class="grid grid-cols-3 py-4 gap-4">
        {#each data.announcements as announcement}
            <AnnouncementCard {...announcement} />
        {/each}
    </div>
</main>
