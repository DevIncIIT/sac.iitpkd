<script>
  // Placeholder data for live events and activity
  let events = [
    { organizer:"Voxel", 
    title: "Photoshop Intro", 
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae adipisci minima necessitatibus cum, pariatur dolore suscipit voluptates esse, dicta ea omnis commodi optio possimus id porro laboriosam vero, qui unde.", 
    date: "Date", 
    icon: "🟠" },
    { organizer:"YACC", 
    title: "Web Dev Bootcamp", 
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae adipisci minima necessitatibus cum, pariatur dolore suscipit voluptates esse, dicta ea omnis commodi optio possimus id porro laboriosam vero, qui unde.",
    date: "Date", 
    icon: "🔴" },
  ];

  let activity = [
    { user: "Yace", message: "has replied on Yace", icon: "🟠" },
    { user: "Veet", message: "has replied on Veet", icon: "🟢" },
  ];
</script>

<div class="RightSidebar">
  <!-- Header -->
  <div class="header">
    
    <div class="username">Userxyz123</div>
    <div class="profile-pic">
        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="User Avatar" class="avatar" />
      </div>
  </div>

  <!-- Calendar -->

  <div class="calendar">
    <p class="month">Month year</p>
    <div class="days">
      <div>Sun</div>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
    </div>
    <div class="dates">
      {#each Array(31).fill(1) as date}
        <span>{date}</span>
      {/each}
    </div>
  </div>

  <!-- Live Events -->
  <div class="live-events">
    <h3>Live Events</h3>
    {#each events as event}
      <div class="event">
        <!-- <span class="icon">{event.icon}</span> -->
        <div class="details">
          <h3 class="Organizer">
            <span><img src="logo"></span>
            {event.organizer}
          </h3>
          <h4>{event.title}</h4>
          <hr style="border: 0.5px solid black">
          <p>{event.description}</p>
          <p class="date">{event.date}</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Activity -->
  <div class="activity">
    <h3>Activity</h3>
    {#each activity as act}
      <div class="activity-item">
        <span class="icon">{act.icon}</span>
        <p><strong>{act.user}</strong> {act.message}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .RightSidebar {
    position: absolute; top: 5px; right: 0px;
    background-color: #1c1c1c;
    color:rgb(163, 163, 163);
    padding: 20px;
    border-radius: 8px;
    width: 400px ;
    font-family: Arial, sans-serif;
  }

  .header {
    position: relative;
    left: 200px;
    text-align: center;
    display: flex;
    align-items:center;
    margin-bottom: 20px;
    font-size: 25px;
  }


  .header .avatar {
    position: relative;
    right: 10 px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-top: 10px;
  }


  .calendar {
    background: #ffdbcf;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 20px;
    width: 329px;
  }

  .calendar .month {
    color: black;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .days, .dates {
    color: black;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    text-align: center;
  }

  .dates span {
    background: #ffdbcf;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
  }

  .live-events, .activity {
    margin-bottom: 20px;
  }

  .live-events h3, .activity h3 {
    /* color: black; */
    margin-bottom: 10px;
    /* border-bottom: 2px solid black; */
    display: inline-block;
  }
  .Organizer {
    color:black;
    font-size:25px;
  }

  .event, .activity-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

   .activity-item .icon {
    font-size: 20px;
    margin-right: 10px;
  }

  .event .details {
    background: #ff7733;
    padding: 10px;
    border-radius: 5px;
    color: white;
    flex: 1;
  }

  .event .details h4 {
    margin: 0 0 5px;
  }

  .event .details .date {
    font-size: 12px;
    color: #ffd4bf;
  }
</style>
