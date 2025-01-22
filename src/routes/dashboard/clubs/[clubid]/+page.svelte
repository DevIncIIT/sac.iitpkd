<script lang="ts">
    import { enhance } from "$app/forms";
    import { image_link } from "$lib";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    let club = $derived(data.data);

    let is_already_member: boolean = $derived(
        data.my_clubs.filter((my_club: any) => my_club.id == club.id).length,
    );
    let has_applied: boolean = $state(
        data.my_applied_clubs.filter(
            (applied_club: any) => applied_club.id == club.id,
        ).length,
    );

    const submit = () => {
        return async ({ result }: { result: any }) => {
            if (result.type == "success" && result.data.success) {
                has_applied = true;
                //
            }
        };
    };
    let dialog;
</script>

<form id="join" action="?/join" method="post" use:enhance={submit}>
    <input type="hidden" name="clubid" value={club.id} />
</form>

<main class="px-4 h-[50vh] w-full">
    <div class="flex gap-4 items-center mb-4">
        <h1 class="text-4xl font-bold">{club.name.toUpperCase()}</h1>
        <dialog bind:this={dialog}>
            <label
                for="self-description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your description</label
            >
            <textarea
                id="self-description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tell about yourself"
                form="join"
                required
            ></textarea>
            <button
                type="submit"
                class="px-3 py-2 rounded-2xl text-xl"
                style="background: #ffcca0;"
                form="join"
                on:click={() => dialog.close()}>Submit</button
            >
        </dialog>
        {#if !is_already_member && has_applied}
            <button
                form="join"
                type="submit"
                class="px-3 py-2 rounded-2xl text-xl"
                style="background: #ffcca0;"
                disabled>Pending</button
            >
        {:else if !is_already_member}
            <button
                class="px-3 py-2 rounded-2xl text-xl"
                style="background: #ffcca0;"
                on:click={() => dialog.showModal()}>Join</button
            >
        {/if}
    </div>
    <div class="flex h-full py-2 gap-4">
        <div
            class="bg-cover bg-center bg-no-repeat rounded-lg min-w-64"
            style="background-image: url({image_link(
                club.id,
                'Club',
            )}); flex: 1;"
        ></div>
        <p style="flex: 2;">
            {club.description} Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laborum praesentium illum quidem cum voluptatum ab odio harum repellendus!
            Illum cumque autem incidunt similique dolor id nemo nihil dignissimos
            obcaecati, recusandae molestias est ex nisi placeat ut magni minima!
            Impedit ab dolorem delectus at, labore molestiae reiciendis esse ex harum
            quidem, hic repellendus nobis et perspiciatis, sunt consectetur sed architecto
            molestias aliquam non laudantium fugit quam consequuntur alias! Rem est
            beatae natus enim nulla sunt aspernatur voluptatibus totam, vitae, nesciunt
            quam ipsam obcaecati explicabo doloribus facere. Beatae libero placeat
            cum quo, fugit pariatur officiis sapiente esse tenetur modi dolores corporis
            ipsum.
        </p>
        <div style="flex: 1;" class="bg-[#f6a55f] p-4 rounded-lg">
            <h3 class="text-xl font-bold">
                Heads of {club.name.toUpperCase()}
            </h3>
            {#each club.heads as head}
                <strong>{head.name}</strong>
                <br />
                <span>
                    <a href="mailto:{head.email}">{head.email}</a> |
                    <a href="tel:{head.contact_number}">{head.contact_number}</a
                    >
                </span>
                <br />
            {/each}
        </div>
    </div>
    <h1 class="text-2xl font-bold mt-4">Forum Discussions</h1>
    <p>Coming Soon!</p>
</main>
