<script lang="ts">
    import ClubPage from "$lib/components/ClubPage.svelte";
    import type { PageServerData } from "./$types";

    let { data }: { data: PageServerData } = $props();
</script>

<ClubPage
    reqs={data.applications}
    club_data={data.club_data}
></ClubPage>
