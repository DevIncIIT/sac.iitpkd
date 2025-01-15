<script lang="ts">
    export let announcements: [string, string][] = [];
</script>

<div class="w-[94vw]  p-4 mx-auto"> 
    <h2 class="text-gray-500 text-3xl mb-2 font-bold">ANNOUNCEMENTS</h2>
    <div class="w-[9rem] h-2 bg-orange-500 mb-4 "></div>
    <ol class="list-none p-0">
        {#each announcements as [title, description]}
            <li class="flex items-center mb-2">
                <!-- <span class="w-4 h-4 rounded-full bg-orange-500 mr-2"></span> -->
                <p>
                    <strong class="block">{title}</strong>
                    <span>{description.slice(0, 120) + (description.length > 120 ? "..." : "")}</span>
                </p>
            </li>
        {/each}
    </ol>
</div>
