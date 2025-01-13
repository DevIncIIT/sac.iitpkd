<script lang="ts">
    import ClubPage from "$lib/components/ClubPage.svelte";
    import type { PageServerData } from "./$types";

    let { data }: { data: PageServerData } = $props();
</script>

<ClubPage
    reqs={[
        {
            username: "sac",
            date: new Date(),
        },
        {
            username: "sac",
            date: new Date(),
        },
        {
            username: "sac",
            date: new Date(),
        },
    ]}
    club_data={data}
></ClubPage>
