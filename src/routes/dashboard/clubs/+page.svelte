<script lang="ts">
    import RightSideBar from "$lib/components/Dashboard/RightSideBar.svelte";
    import ClubCard from "./clubCard.svelte";

    export let data;

</script>

<div class="flex justify-between w-[100%]">
    <div class="main flex flex-col mb-5">
        <h1 class="text-[2.5rem] font-semibold ml-[3rem]">CLUBS</h1>
        <div class="clubs mt-[2.5rem] ml-[3rem] flex flex-col gap-5">
            <div class="myClubs">
                <p class="text-2xl mb-[1rem]">Clubs</p>
                <div class="flex gap-4 flex-wrap">
                    {#each data.clubs as club}
                        <ClubCard clubName={club.name} clubImage={club.img} clubId={club.id} />
                    {/each}
                </div>
            </div>
            <!-- <div class="otherhClubs">
                <div class="othead flex justify-between pr-[2.5rem] mb-[1rem]">
                    <p class="text-2xl">Other Clubs</p>
                    <button class="viewAll text-xl">View All</button>
                </div>
                <div class="flex gap-4 flex-wrap">
                    {#each myClubs as club}
                        <ClubCard clubName={club.name} clubImage={club.img} />
                    {/each}
                </div>
            </div> -->
        </div>
    </div>
    <div>
        <RightSideBar announcement={data.announcements[0]} event_info={data.events[0]} />
    </div>
</div>


<style>
    .viewAll{
		background-color: rgba(243, 130, 33, 1);
		width:117px ;
		height:42px;
		border-radius: 12px;
        color: white;
	}
</style>