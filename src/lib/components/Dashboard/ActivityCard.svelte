<script>
    export let Activity;
</script>

<div class="card w-[25rem]">
    <div class="card_header flex flex-col pb-2">
        <div class="author flex gap-3 items-center">
            <img src={Activity.img} alt="profile-pic" class="rounded-5" style="height: 3rem"/>
            <div class="card_title">
                <p>
                    <span class="text-xl text-gray-700">{Activity.name}</span>
                    <span class="text-lg">has replied on</span>
                    <span class="text-lg font-semibold">{Activity.club}</span>
                </p>
            </div>
        </div>
        <div class="content text-lg ml-[0.5rem]"> 
            {Activity.description}
        </div>
    </div>
</div>

<style>
    .card{
        border-left: 8px solid #fa9033;
        padding: 1rem;
        padding-left: 1.5rem;
    }
</style>