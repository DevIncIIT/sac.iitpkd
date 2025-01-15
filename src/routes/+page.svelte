<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import AnnoucementList from "$lib/components/Dashboard/AnnoucementList.svelte";
    import MainPageContent from "$lib/components/Dashboard/MainPageContent.svelte";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import HomeLoadingPage from "$lib/components/HomeLoadingPage.svelte";

    export let data;

    const announcements = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ];

    const images = ["/carousel.jpeg", "/carousel.jpeg", "/carousel.jpeg"];

    let isLoading = true;

    // Hide the loading page after 3 seconds
    setTimeout(() => {
        isLoading = false;
    }, 1000);
</script>

{#if isLoading}
    <HomeLoadingPage />
{:else}
<Header LoggedIn = {data.loggedIn} />
<AnnoucementList {announcements} />
<MainPageContent heading="About Us" content="Giraffes are 30 times more likely to get hit by lightning than people. True, there are only five well-documented fatal lightning strikes on giraffes between 1996 and 2010. But due to the population of the species being just 140,000 during this time, it makes for about 0.003 lightning deaths per thousand giraffes each year. This is 30 times the equivalent fatality rate for humans.Identical twins don’t have the same fingerprints. You can’t blame your crimes on your twin, after all. This is because environmental factors during development in the womb (umbilical cord length, position in the womb, and the rate of finger growth) impact your fingerprint.Earth’s rotation is changing speed. It's actually slowing. This means that, on average, the length of a day increases by around 1.8 seconds per century. 600 million years ago a day lasted just 21 hours.Your brain is constantly eating itself. This process is called phagocytosis, where cells envelop and consume smaller cells or molecules to remove them from the system. Don’t worry! Phagocytosis isn't harmful, but actually helps preserve your grey matter." />
<Carousel {images} />
<MainPageContent heading="Councils" content="Giraffes are 30 times more likely to get hit by lightning than people. True, there are only five well-documented fatal lightning strikes on giraffes between 1996 and 2010. But due to the population of the species being just 140,000 during this time, it makes for about 0.003 lightning deaths per thousand giraffes each year. This is 30 times the equivalent fatality rate for humans.Identical twins don’t have the same fingerprints. You can’t blame your crimes on your twin, after all. This is because environmental factors during development in the womb (umbilical cord length, position in the womb, and the rate of finger growth) impact your fingerprint.Earth’s rotation is changing speed. It's actually slowing. This means that, on average, the length of a day increases by around 1.8 seconds per century. 600 million years ago a day lasted just 21 hours.Your brain is constantly eating itself. This process is called phagocytosis, where cells envelop and consume smaller cells or molecules to remove them from the system. Don’t worry! Phagocytosis isn't harmful, but actually helps preserve your grey matter." />
<Carousel {images} />
<Footer />

<!-- <Home/> -->
{/if}
