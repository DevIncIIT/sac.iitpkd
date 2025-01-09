<script>
    let requests = [
        ['Username1', new Date(2025, 0, 5, 14, 30)],
        ['Username2', new Date(2025, 0, 6, 15, 30)],
        ['Username3', new Date(2025, 0, 6, 16, 30)],
        ['Username4', new Date(2025, 0, 6, 18, 30)],
        ['Username5', new Date(2025, 0, 6, 18, 58)],
    ];

    let currDate = new Date();
</script>

<div class="imag"></div>
<div class="container">
    <h1 class="fw-bold fs-2 pb-3">Club Name</h1>
    <h6 class="pb-4">Creation Date</h6>
    <div class="club-box rounded-3 p-4 position-relative" style="max-width: 1000px;">
        <ul>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Club Name:</b> club name
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Club description:</b> club description
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Club Heads:</b> club heads
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Club Head Number:</b> club head number
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
        </ul>
        <div class="d-flex optional rounded-3 text-white p-4 fw-semibold mt-4">
            <span>Optional message   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span>
            <i class="pl-5 fs-4 fa-regular fa-pen-to-square"></i>
        </div>
    </div>
    <div class="pt-5 pb-5">
        <div class="d-flex justify-content-between pb-4">
            <h2 class="fs-2">Pending Requests</h2>
            <button class="text-white rounded-1 view-button p-2">VIEW ALL</button>
        </div>
        {#each requests as usrname}
            <div class="request d-flex justify-content-between pb-3 pt-3">
                <span class="fs-5">{usrname[0]}</span>
                <div>
                    <span>{Math.floor((currDate.getTime() - usrname[1].getTime())/(1000*3600*24)) >= 1 ? `${Math.floor((currDate.getTime() - usrname[1].getTime())/(1000*3600*24))} days ago` : Math.floor((currDate.getTime() - usrname[1].getTime())/(1000*3600)) >= 1 ? `${Math.floor((currDate.getTime() - usrname[1].getTime())/(1000*3600))} hours ago` : Math.floor((currDate.getTime() - usrname[1].getTime())/(1000*60)) >= 1 ? `${Math.floor((currDate.getTime() - usrname[1].getTime())/(1000*60))} minutes ago` : `${Math.floor((currDate.getTime() - usrname[1].getTime())/(1000))} seconds ago`}</span>
                    <button class="ml-12 view-button pt-2 pb-2 pl-4 pr-4 rounded-5 text-white">Accept</button>
                </div>
            </div>
            <hr/>
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
        background-color: #F38221;
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

    .optional {
        background-color: rgba(94, 96, 96, 0.8);
    }
</style>