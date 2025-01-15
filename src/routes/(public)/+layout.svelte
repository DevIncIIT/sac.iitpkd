<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    export let data;

</script>

<Header LoggedIn={data.loggedIn} />
<slot />
<Footer />