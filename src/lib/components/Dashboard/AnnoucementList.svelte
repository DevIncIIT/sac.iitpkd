<script>
    export let announcements = [];
</script>

<div class="w-[94vw]  p-4 mx-auto"> 
    <h2 class="text-gray-500 text-lg mb-2 ">ANNOUNCEMENTS</h2>
    <div class="w-20 h-2 bg-orange-500 mb-4 "></div>
    <ul class="list-none p-0">
        {#each announcements as i}
            <li class="flex items-center mb-4">
                <span class="w-4 h-4 rounded-full bg-orange-500 mr-2"></span>
                {i}
            </li>
        {/each}
    </ul>
</div>
