<script>
    import LeftSideBar from "$lib/components/Dashboard/LeftSideBar.svelte";
    import RightSideBar from "$lib/components/Dashboard/RightSideBar.svelte";
</script>

<div class="flex flex-row">
    <LeftSideBar/>
    <slot />
    <RightSideBar />
</div>