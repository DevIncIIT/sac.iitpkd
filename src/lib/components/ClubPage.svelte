<script lang="ts">
    import type { ClubData } from "$lib";

    type Request = {
        id: number;
        username: string;
        date: Date;
    };

    let { reqs, club_data }: { reqs: Request[]; club_data: ClubData } =
        $props();
    let currDate = new Date();

    function time2human(d: Date) {
        return Math.floor(
            (currDate.getTime() - d.getTime()) / (1000 * 3600 * 24)
        ) >= 1
            ? `${Math.floor((currDate.getTime() - d.getTime()) / (1000 * 3600 * 24))} days ago`
            : Math.floor((currDate.getTime() - d.getTime()) / (1000 * 3600)) >=
                1
              ? `${Math.floor((currDate.getTime() - d.getTime()) / (1000 * 3600))} hours ago`
              : Math.floor((currDate.getTime() - d.getTime()) / (1000 * 60)) >=
                  1
                ? `${Math.floor((currDate.getTime() - d.getTime()) / (1000 * 60))} minutes ago`
                : `${Math.floor((currDate.getTime() - d.getTime()) / 1000)} seconds ago`;
    }

    async function accept_request(id: number) {
        const response = await fetch("/api/accept", {
            method: "POST",
            body: JSON.stringify({
                application_id: id,
            }),
        });

        if (!response.ok) {
            alert("Failed to accept request.");
        }
    }
</script>

<div class="imag"></div>
<div class="container">
    <h1 class="fw-bold fs-2 pb-3">{club_data.name}</h1>
    <h6 class="pb-4">Creation Date</h6>
    <div
        class="club-box rounded-3 p-4 position-relative"
        style="max-width: 1000px;"
    >
        <ul>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Club Name:</b>
                {club_data.name}
                <!-- <i
                    class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"
                ></i> -->
            </li>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Club description:</b>
                <!-- <i
                class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"
                ></i> -->
            </li>
            <span class="ml-8 block">
                {club_data.description}
            </span>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Club Heads:</b>
            </li>
            <div class="ml-8">
                {#each club_data.heads as head}
                    <h2 class="text-2xl">{head.name}</h2>
                    <p>{head.email}, {head.contact_number}</p>
                {/each}
            </div>
        </ul>
    </div>
    <div class="pt-5 pb-5">
        <div class="d-flex justify-content-between pb-4">
            <h2 class="fs-2">Pending Requests</h2>
        </div>
        {#each reqs as req}
            <div class="request d-flex justify-content-between pb-3 pt-3">
                <span class="fs-5">{req.user_name} ({req.user_email})</span>
                <div>
                    <span>{time2human(new Date(req.created_at))}</span>

                    <button
                        class="ml-12 view-button pt-2 pb-2 pl-4 pr-4 rounded-5 text-white"
                        onclick={() => accept_request(req.id)}>Accept</button
                    >
                </div>
            </div>
            <hr />
        {/each}
    </div>
</div>

<style>
    .bullet {
        width: 25px;
        background-color: black;
        height: 25px;
        border-radius: 50px;
    }

    .view-button {
        background-color: #f38221;
    }

    li {
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .imag {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        background-image: url("/clubBackground.png");
        background-size: contain;
        z-index: -1;
    }

    .club-box {
        background-color: rgba(243, 130, 33, 0.72);
    }
</style>
