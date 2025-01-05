<script>
    import CarouselDashboard from "$lib/components/Dashboard/CarouselDashboard.svelte";

    let announcementList = [
        ['Announcement Heading 1', 'placeholder.png', new Date('12/21/2024')],
        ['Announcement Heading 2', 'placeholder.png', new Date('12/20/2024')],
        ['Announcement Heading 3', 'placeholder.png', new Date('12/19/2024')],
        ['Announcement Heading 4', 'placeholder.png', new Date('12/18/2024')],
        ['Announcement Heading 5', 'placeholder.png', new Date('12/17/2024')]
    ]
    
    let images = [
        'placeholderClub.png', 'placeholderClub.png', 'placeholderClub.png', 'placeholderClub.png', 'placeholderClub.png'
    ]

    let currDate = new Date();
</script>

<div class="container">
    <div class="fs-3 fw-bold pl-9" id="head1">DASHBOARD</div>
    <div id="Announcements">
        <div class="d-flex justify-content-between">
            <h1 class="fs-4 fw-semibold">Announcements</h1>
            <button class="btndbd text-white rounded-3 p-2"><a href="/dashboard/announcements">VIEW ALL</a></button>
        </div>
        <div>
            <div class="pt-4 pb-4"> 
                <ul>
                    {#each announcementList.slice(0,4) as i,index}
                            <li class="flex items-center mb-2 pb-2 position-relative">
                                <img src={announcementList[index][1]} alt="" class="pr-10"/>
                                {announcementList[index][0]}
                                <div class="position-absolute right-10">
                                    {Math.floor((currDate.getTime() - announcementList[index][2].getTime())/(1000*3600*24))} days ago
                                </div>
                                <i class="fas fa-ellipsis-h position-absolute right-0"></i>
                                <hr/>
                            </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div>
            <h1 class="fs-4 pb-3">Status</h1>
            <div class="status-box rounded-3 d-flex justify-content-evenly">
                <div class="status-comp">
                    <div class="status-items">
                        <img src="club.svg" alt="club-icon" style="height: 20px;"/>
                        <div>5 Clubs</div>
                    </div>
                </div>
                <div class="vert-line"></div>
                <div class="status-comp">
                    <div class="status-items">
                        <img src="club.svg" alt="club-icon" style="height: 20px;"/>
                        <div>10 Events</div>
                    </div>
                </div>
                <div class="vert-line"></div>
                <div class="status-comp">
                    <div class="status-items">
                        <img src="club.svg" alt="club-icon" style="height: 20px;"/>
                        <div>2 ongoing projects</div>
                    </div>
                </div>
                <div class="vert-line"></div>
                <div class="status-comp">
                    <div class="status-items">
                        <img src="club.svg" alt="club-icon" style="height: 20px;"/>
                        <div>Add functionalities</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clubs-db pt-10 pb-10">
            <div class="d-flex justify-content-between pb-4">
                <h1 class="fs-4">My Clubs</h1>
                <button class="btndbd text-white rounded-3 p-2"><a href="/dashboard/clubs">VIEW ALL</a></button>
            </div>
            <CarouselDashboard {images}/>
        </div>
    </div>
</div>


<style>
    #Announcements {
        padding: 21px 153px 0px 40px;   
    }

    .btndbd {
        background: #F38221;
    }

    .btndbd:hover {
        background-color: #f1984a;
    }

    .status-box {
        box-shadow: 0px 1px 2px 0px #00000040;
    }

    .status-comp {
        margin: 30px;
    }

    .status-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
    }

    .vert-line {
        border-right: 1px solid #D9D9D9;
        height: 80px;
        transform: translateY(15px);
    }

    li {
        border-bottom: 1px solid #D9D9D9;
        width: 100%;
    }

    i:hover {
        border-radius: 100px;
        background-color: rgb(204, 200, 200);
        padding: 5px;
        cursor: pointer;
    }
</style>


