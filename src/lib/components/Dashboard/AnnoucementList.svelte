<script>
    export let announcements = [];
</script>

<div class="w-[94vw] p-4 mx-auto">
    <h2 class="text-gray-500 dark:text-gray-100 text-3xl mb-2 font-bold">ANNOUNCEMENTS</h2>
    <div class="w-[9rem] h-2 bg-orange-500 mb-4"></div>
    <ul class="list-none p-0">
        {#each announcements as i}
            <li class="flex items-center mb-4">
                <span class="w-4 h-4 rounded-full bg-orange-500 mr-2"></span>
                <span class="text-gray-700 dark:text-gray-200">{i}</span>
            </li>
        {/each}
    </ul>
</div>
