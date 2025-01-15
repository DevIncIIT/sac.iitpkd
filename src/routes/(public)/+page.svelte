<script lang="ts">
    import Carousel from "$lib/components/Carousel.svelte";
    import AnnoucementList from "$lib/components/Dashboard/AnnoucementList.svelte";
    import MainPageContent from "$lib/components/Dashboard/MainPageContent.svelte";
    import HomeLoadingPage from "$lib/components/HomeLoadingPage.svelte";

    export let data;

    const announcements: [string, string][] = data.announcements.map(
        (announcement: any) => [announcement.title, announcement.content]
    );

    const images = ["/carousel.jpeg", "/carousel.jpeg", "/carousel.jpeg"];

    let isLoading = false;
</script>

{#if isLoading}
    <HomeLoadingPage />
{:else}
    <!-- <Header LoggedIn={data.loggedIn} /> -->
    <MainPageContent
        heading="About SAC"
        content="The Student Affairs Council (SAC) of IIT Palakkad, established in 2016, is the supreme student-body council which takes all the pivotal decisions, in association with the institute, and suggests policies whenever necessitated, concerning the welfare of the whole of the student community of IIT Palakkad. The SAC, headed by the General Secretary, consists of eight student-elected representatives who passionately work together towards transcending the institute in a plethora of fields and enhancing the student life at the institute. With the aforementioned view, SAC consistently promotes the objectives of fostering curricular, co-curricular and extracurricular activities for the holistic development of the students of IIT Palakkad. SAC is an indispensable part of our institute and has been instrumental to the growth and development of the institute since its inception."
    />
    <a
        class="block text-xl font-bold text-blue-600 p-4 mx-auto w-[94vw]"
        href="/constitution.pdf">Student Constitution</a
    >
    <Carousel {images} />
    <AnnoucementList {announcements} />
    <MainPageContent
        heading="Gallery"
        content="Photos from various events and activities"
    />
    <Carousel {images} />
    <!-- <Footer /> -->

    <!-- <Home/> -->
{/if}
