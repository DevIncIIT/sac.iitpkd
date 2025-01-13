<script lang="ts">
    import ClubSelector from "$lib/components/ClubSelector.svelte";
    import { Button } from "$lib/components/ui/button"
    import { Input } from "$lib/components/ui/input"
    
    let {data} = $props();
    let selected_club: string | undefined = $state();
</script>
<main class="flex flex-col items-center justify-center w-3/4 gap-4 ">
    <h1 class="text-3xl font-bold">Create Live Event</h1>
    <form method="POST" enctype="multipart/form-data" class="flex flex-col w-3/4 justify-center gap-2">
        <label for="title">Title</label>
        <Input required type="text" name="title" id="title" placeholder="An intersting title..." />
        <label for="content">Content</label>
        <Input required type="text" name="content" id="content" placeholder="The content of the announcement" />
        <label for="club">Select club</label>
        <ClubSelector options={data.clubs} callback={(club) => {selected_club = club}}/>
        <input type="text" hidden value="{selected_club}" name="club" required>
        <label for="image">Date</label>
        <Input required type="date" name="date" />
        <Input required type="time" name="time" />
        <br>
        <label for="image">Venue</label>
        <Input required type="text" name="venue" />
        <br>
        <label for="image">Add an image</label>
        <Input required type="file" name="image" />
        <br>
        <Button type="submit">Create Live Event</Button>
    </form>
</main>