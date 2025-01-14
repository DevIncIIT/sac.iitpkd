<script>
  import MainContent from './MainContent.svelte';
  export let data ;
  let events=data.events;
</script>

<div class="mt-3 ml-[2rem]">
  <MainContent {events}/>
</div>

