<script>
    let clubList = [
        ['Club 1', '/placeholder.png', 'Club Head 1'],
        ['Club 2', '/placeholder.png', 'Club Head 2'],
        ['Club 3', '/placeholder.png', 'Club Head 3'],
        ['Club 4', '/placeholder.png', 'Club Head 4'],
        ['Club 5', '/placeholder.png', 'Club Head 5']
    ];
</script>

<div class="imag"></div>
<div class="container">
    <h1 class="fw-bold fs-2 pb-4">Council Name</h1>
    <div class="council-box rounded-3 p-4 position-relative" style="max-width: 1000px;">
        <ul>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Council Name:</b> Council name
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Council description:</b> Council description
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Council Heads:</b> Council heads
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
            <li>
                <button class="bullet" aria-label="bullet"></button>
                <b>Council Head Number:</b> Council head number
                <i class="fs-4 fa-regular fa-pen-to-square position-absolute right-10"></i>
            </li>
        </ul>
    </div>
    <div class="pt-5 pb-5">
        <div class="d-flex justify-content-between pb-4">
            <h2 class="fs-2">Name of Clubs</h2>
            <button class="text-white rounded-1 view-button p-2">VIEW ALL</button>
        </div>
        {#each clubList as club}
            <div class="request d-flex align-items-center pb-2 pt-2">
                <img src={club[1]} class="rounded-5 mr-6" alt="club-img"/>
                <div>
                    <div class="fs-5 fw-semibold">{club[0]}</div>
                    <div>{club[2]}</div>
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

    .council-box {
        background-color: rgba(243, 130, 33, 0.72);
    }
</style>