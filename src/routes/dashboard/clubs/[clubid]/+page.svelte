<script lang="ts">
    import type { PageData } from "./$types";

    // let { data }: { data: PageData } = $props();
    export let data;
</script>

<main class="px-4 h-[50vh]">
    <h1 class="text-4xl font-bold mb-4">{data.name.toUpperCase()}</h1>
    <div class="flex h-full py-2 gap-4">
        <div
            class="bg-cover bg-center bg-no-repeat rounded-lg"
            style="background-image: url({data.image}); flex: 1;"
        ></div>
        <p style="flex: 2;">{data.description}</p>
        <div style="flex: 1;" class="bg-[#f6a55f] p-4 rounded-lg">
            <h3 class="text-xl font-bold">Heads of {data.name.toUpperCase()}</h3>
            {#each data.heads as head}
                <strong>{head.name}</strong>
				<br>
                <span>
                    <a href="mailto:{head.email}">{head.email}</a> |
                    <a href="tel:{head.contact_number}">{head.contact_number}</a
                    >
                </span>
				<br>
            {/each}
        </div>
    </div>
	<h1 class="text-2xl font-bold mt-4">Forum Discussions</h1>
	<p>Coming Soon!</p>
</main>
