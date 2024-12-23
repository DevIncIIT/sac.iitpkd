<script lang="ts">
    import Autoplay from "embla-carousel-autoplay";
    import * as Carousel from "$lib/components/ui/carousel/index.ts";
    export let images; 
</script>

<Carousel.Root plugins={[Autoplay({delay: 2000})]}>
  <Carousel.Content>
    {#each images as image}
      <Carousel.Item style="flex-basis: 30%;"> 
        <img src={image} alt="club-image" class="rounded-3"/>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous/>
  <Carousel.Next/>
</Carousel.Root>
