<script>
    export let heading = ""; 
    export let content = ""; 
    export let id="";
</script>

<div id={id} class="w-[94vw] p-4 mx-auto">
    <h2 class="text-gray-500 text-3xl dark:text-gray-100  font-bold mb-2 ">{heading}</h2>
    <div class="w-[9rem] h-2 bg-orange-500 mb-4 "></div>
    <div class="content">
        <p class="text-gray-600 dark:text-gray-200 text-justify">{content}</p>
    </div>
</div>
