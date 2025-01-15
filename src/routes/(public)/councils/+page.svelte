<script lang="ts">
    export let councils = [
    {
      councilName: 'Council 1',
      councilEmail: 'council1@example.com',
      councilimage : '/iitlogo.jpg',
      description: 'Lorem ipsum dolor sit amet, consecwejkfhjewifuibjidbhjvbdbudsbdbeueuivbeibdfibdfibeifbehberbduibbdfuvueibefibijerfberibueitetur adipiscing elit. Proin venenatis lorem et odio viverra, eget eleifend augue aliquam.',
      clubs: [
        { clubName: 'Club A', clubEmail: 'clubA@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A fun club for all!' },
        { clubName: 'Club B', clubEmail: 'clubB@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A cool club to join!' },
        { clubName: 'Club C', clubEmail: 'clubC@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A science club!' },
        // Add more clubs as needed
      ]
    },
    {
      councilName: 'Council 1',
      councilEmail: 'council1@example.com',
      councilimage : '/iitlogo.jpg',
      description: 'Lorem ipsum dolor sit amet, consecwejkfhjewifuibjidbhjvbdbudsbdbeueuivbeibdfibdfibeifbehberbduibbdfuvueibefibijerfberibueitetur adipiscing elit. Proin venenatis lorem et odio viverra, eget eleifend augue aliquam.',
      clubs: [
        { clubName: 'Club A', clubEmail: 'clubA@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A fun club for all!' },
        { clubName: 'Club B', clubEmail: 'clubB@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A cool club to join!' },
        { clubName: 'Club C', clubEmail: 'clubC@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A science club!' },
        // Add more clubs as needed
      ]
    },
    {
      councilName: 'Council 1',
      councilEmail: 'council1@example.com',
      councilimage : '/iitlogo.jpg',
      description: 'Lorem ipsum dolor sit amet, ert et et e4 e 4e e eyteit heh ueiorgt uoeri tuoe uioe tiue uoergtuer tuierhtuierh uieruierb guier uetconsecwejkfhjewifuibjidbhjvbdbudsbdbeueuivbeibdfibdfibeifbehberbduibbdfuvueibefibijerfberibueitetur adipiscing elit. Proin venenatis lorem et odio viverra, eget eleifend augue aliquam.',
      clubs: [
        { clubName: 'Club A', clubEmail: 'clubA@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A fun club for all!' },
        { clubName: 'Club B', clubEmail: 'clubB@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A cool club to join!' },
        { clubName: 'Club C', clubEmail: 'clubC@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A science club!' },
        // Add more clubs as needed
      ]
    },
    {
      councilName: 'Council 1',
      councilEmail: 'council1@example.com',
      councilimage : '/iitlogo.jpg',
      description: 'Lorem ipsum dolor sit amet, consecwejkfhjewifuibji dbhjvbdbudsbdbeueuivbeib dfibdfibeifbehberbduibbd fuvueibefib ijerfberibueitetur adipiscing elit. Proin venenatis lorem et odio viverra, eget eleifend augue aliquam.',
      clubs: [
        { clubName: 'Club A', clubEmail: 'clubA@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A fun club for all!' },
        { clubName: 'Club B', clubEmail: 'clubB@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A cool club to join!' },
        { clubName: 'Club C', clubEmail: 'clubC@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A science club!' },
        { clubName: 'Club C', clubEmail: 'clubC@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A science club!' },
        { clubName: 'Club C', clubEmail: 'clubC@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A science club!' },
        { clubName: 'Club C', clubEmail: 'clubC@example.com', clubImage: '/iitlogo.jpg', clubDescription: 'A science club!' },
        // Add more clubs as needed
      ]
    },
    
    // More councils here...
  ];
</script>


<div class="flex justify-center">
    
    <div class=" w-[85%]  grid grid-cols-1 md:grid-cols-2 gap-8">
  {#each councils as council}
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="flex">
          <!-- Image Section (Left 30%) -->
          <div class="w-1/3">
            <img src="{council.councilimage}" alt="Council" class="w-full h-full object-contain" />
        </div>
        
        <!-- Content Section (Right 70%) -->
        <div class="w-2/3 p-4">
            <h3 class="text-xl font-semibold">{council.councilName}</h3>
            <p class="text-sm text-blue-600">{council.councilEmail}</p>
            <div class="h-32 overflow-y-auto mt-2">
            <p class="text-gray-700 text-wrap">{council.description}</p>
        </div>
        
        <!-- Clubs List (Horizontal Scroll) -->
        <div class="mt-4 flex overflow-x-auto space-x-4">
            {#each council.clubs as club}
            <div class="flex-none  bg-gray-100 p-2 rounded-lg">
                <div class="p-2">
                    <h4 class="text-sm font-semibold rounded-md">{club.clubName}</h4>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
</div>
{/each}
</div>
</div>

<style>
  .club-image {
    height: 6rem;
    object-fit: cover;
}
::-webkit-scrollbar {
    display: none;
}
</style>