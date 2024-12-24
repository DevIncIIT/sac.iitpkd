<script>
    import ActivityCard from "./ActivityCard.svelte";
    import LiveEventCard from "./liveEventCard.svelte"

    export let userName = 'Username';

    export let LiveEvent = {
      img: "/placeholder.png",
      title: "Phtoshop Intro",
      club: "Voxel",
      date: '10 Jan, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laboriosam, architecto ad delectus suscipit, facere minima aperiam quae iusto perferendis, maiores natus in repellat. Dignissimos temporibus at alias fuga minus veritatis id?'
    };

    export let Activity = {
      img: "/placeholder.png",
      name: "John Doe",
      club: "YACC",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,'
    }
</script>

<div class="right-sidebar">
  <div class="d-flex justify-content-end items-center mr-4 mt-4">
    <span style="color: #5E6060;" class="fs-5 fw-semibold">Username</span>
    <img src="/placeholder.png" alt="profile-pic" class="rounded-5 ml-4"/>
</div>
    <div class="live_events">
      <p class="text-3xl my-3">Live Events</p>
      <LiveEventCard LiveEvent={LiveEvent} />
    </div>
    <div class="live_events">
      <p class="text-3xl my-3">Activity</p>
      <ActivityCard Activity={Activity} />
    </div>
</div>

<style>
    .right-sidebar {
        padding-inline: 3rem;
    }
</style>
