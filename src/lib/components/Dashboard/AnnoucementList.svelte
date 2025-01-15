<script lang="ts">
    export let announcements: [string, string][] = [];
    export let loggedIn: boolean = false;
</script>

<div class="w-[94vw] p-4 mx-auto">
    <h2 class="text-gray-500 text-3xl mb-2 font-bold">ANNOUNCEMENTS</h2>
    <div class="w-[9rem] h-2 bg-orange-500 mb-1"></div>
    <a href={loggedIn ? "/dashboard" : "/login"} class="mb-8 block text-blue-600"
        >{!loggedIn ? "Login to read more" : "Go to dashboard to read more"}</a
    >
    <ol class="list-none p-0">
        {#each announcements as [title, description]}
            <li class="flex items-center mb-2">
                <!-- <span class="w-4 h-4 rounded-full bg-orange-500 mr-2"></span> -->
                <p>
                    <strong class="text-2xl block text-blue-600">{title}</strong>
                    <span
                        >{description.slice(0, 120) +
                            (description.length > 120 ? "..." : "")}</span
                    >
                </p>
            </li>
        {/each}
    </ol>
</div>
