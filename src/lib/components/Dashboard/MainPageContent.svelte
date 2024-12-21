<script>
    export let heading = ""; 
    export let content = ""; 
  </script>
  
  <div class="w-full p-4"> 
      <h2 class="text-gray-500 text-lg mb-2">{heading}</h2>
      <div class="w-20 h-2 bg-orange-500 mb-4"></div>
      <div class="content">
          <p class="text-gray-600">{content}</p>
      </div>
  </div>