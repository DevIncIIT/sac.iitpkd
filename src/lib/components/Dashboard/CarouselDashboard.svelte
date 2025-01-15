<script lang="ts">
    import Autoplay from "embla-carousel-autoplay";
    import * as Carousel from "$lib/components/ui/carousel/index.ts";
    import { image_link } from "$lib";
    export let my_clubs; 
</script>

<Carousel.Root plugins={[Autoplay({delay: 2000})]}>
  <Carousel.Content>
    {#each my_clubs as my_club}
      <Carousel.Item style="flex-basis: 30%;"> 
        <img src={image_link(my_club.id, "Club")} alt="club-image" class="rounded-3"/>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous/>
  <Carousel.Next/>
</Carousel.Root>
