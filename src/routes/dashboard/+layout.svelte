<script lang="ts">
    import LeftSideBar from "$lib/components/Dashboard/LeftSideBar.svelte";
    import RightSideBar from "$lib/components/Dashboard/RightSideBar.svelte";
    import TopBar from "$lib/components/Dashboard/TopBar.svelte";
    import type { LayoutServerData } from "./$types";

    let { data }: {data: LayoutServerData} = $props();
    console.log(data);
</script>

<TopBar userName={data.profile.name}/>

<div class="main">
    <LeftSideBar/>
    <slot />
    <!-- <RightSideBar userName={data.profile.name} event_info={data.events[0]} announcement={data.announcements[0]}/> -->
</div>

<style>
    .main{
        display: flex;
        flex-direction: row;
        flex: 1 2 1;
    }
</style>