<script>
    const events = [
      { title: 'Photoshop Intro', description: 'Lorem ipsum...', date: 'Date' },
      { title: 'Web Dev Bootcamp', description: 'Lorem ipsum...', date: 'Date' }
    ];
  
    const activities = [
      { user: 'User1', action: 'has replied on', topic: 'VACC' },
      { user: 'User2', action: 'has replied on', topic: 'Voxel' }
    ];
  </script>
  
  <div class="right-sidebar">
    <div class="user-info">
      <img src="/path/to/profile-image.jpg" alt="Profile" class="profile-img" />
      <span class="username">Username</span>
    </div>
  
    <div class="calendar-section">
      <!-- Placeholder for Calendar -->
      <p>Calendar goes here</p>
    </div>
  
    <div class="live-events">
      <h3>Live Events</h3>
      <!-- {#each events as event}
        <LiveEventsCard event={event} />
      {/each} -->
    </div>
  
    <div class="activity-section">
      <h3>Activity</h3>
      {#each activities as activity}
        <div class="activity-item">
          <span class="user">{activity.user}</span>
          <span>{activity.action} <strong>{activity.topic}</strong></span>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .right-sidebar {
      width: 300px; /* Adjust width as needed */
      background-color: #2e2e2e;
      color: #fff;
      padding: 20px;
      border-left: 2px solid #8143F3; /* Sidebar border color */
    }
  
    .user-info {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .profile-img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  
    .username {
      font-weight: bold;
    }
  
    .calendar-section, .live-events, .activity-section {
      margin-bottom: 20px;
    }
  
    .activity-item {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
  
    .user {
      color: #FF914D;
      margin-right: 5px;
    }
  </style>
  