<script>
    import LeftSideBar from "$lib/components/Dashboard/LeftSideBar.svelte";
    import RightSideBar from "$lib/components/Dashboard/RightSideBar.svelte";
</script>

<div class="main">
    <LeftSideBar/>
    <slot />
    <RightSideBar />
</div>

<style>
    .main{
        display: flex;
        flex-direction: row;
        flex: 1 2 1;
    }
</style>