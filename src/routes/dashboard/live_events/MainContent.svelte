<script>
	import EventCard from './EventCard.svelte';
	import Button from "$lib/components/ui/button/button.svelte";
    import { goto } from '$app/navigation';
	export let events = [];
</script>

<div class="main-content">
	<div class="flex justify-between">
		<div class="title">
			LIVE EVENTS
		</div>
		<Button type="button" on:click={() => goto("/dashboard/live_events/create")}>Create Live Events</Button>
	</div>
	{#each events as event}
		<EventCard {...event} />
	{/each}
</div>

<style>
	.main-content {
		flex: 1;
		padding: 20px;
		color: black;
		}
	.title {
		font-family: "Poppins", Helvetica, sans-serif;
		font-weight: 700;
		font-size: 32px;
		line-height: 48px;
		margin-left: 8px;
		margin-bottom: 48px;
		}
</style>
