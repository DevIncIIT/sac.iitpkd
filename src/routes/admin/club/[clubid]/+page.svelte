<script lang="ts">
    import ClubPage from "$lib/components/ClubPage.svelte";
    import type { PageServerData } from "./$types";

    let { data }: { data: PageServerData } = $props();

	let dummy = "truncate"
	let isPressed = false;
	function desc() {
		isPressed = !isPressed;
		if(dummy=="truncate") dummy = "";
		else dummy = "truncate";
		}
</script>

<ClubPage
    reqs={data.applications}
    club_data={data.club_data}
></ClubPage>

<span class="text {dummy}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit gravida tincidunt. Donec placerat turpis et felis vestibulum, eget vestibulum ipsum egestas. Vestibulum ac iaculis quam. Mauris porttitor eu lorem in rutrum. Integer vel magna a ex iaculis convallis. Vivamus convallis, nisl vel bibendum tincidunt, dolor massa gravida ante, quis.</span>
<style>
	.text {
		display: block;
		width: 75vw;
		margin-bottom: 16px;
	}
	
	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.rtl {
		direction: rtl;
	}
</style>

	
<button onclick={desc}>
	{#if isPressed}
			  Show less
			{:else}
				Show more
			{/if}
</button>