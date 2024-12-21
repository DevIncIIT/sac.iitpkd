<script lang="ts">
    import Autoplay from "embla-carousel-autoplay";
    import * as Carousel from "$lib/components/ui/carousel/index.ts";

    export let images = []; 

    const plugin = Autoplay({ delay: 2000, stopOnInteraction: false });
</script>

<Carousel.Root
  plugins={[plugin]}
  class="relative w-[50vw] h-[50vh] mx-auto flex items-center overflow-hidden"
>
  <Carousel.Content class="h-full">
    {#each images as image}
      <Carousel.Item class="h-full">
        <img 
          src={image} 
          alt="error" 
          class="w-full h-full object-cover cursor-pointer"        
        />
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous class="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-200 z-10">
  </Carousel.Previous>
  <Carousel.Next class="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-200 z-10">
  </Carousel.Next>
</Carousel.Root>
