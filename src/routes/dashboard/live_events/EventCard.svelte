<script>
	export let club;
	export let clublogo;
	export let title;
	export let description;
	export let venue;
	export let image;
	export let starts_at;
	const datestring = new Date(starts_at);
	let time = datestring.toLocaleTimeString();
	let date = datestring.toLocaleDateString();
	
</script>

<div class="event-card">
	<div class="content">
		<div class="club-logo">
			<img src={clublogo} alt={club+" Logo"} class="club-logo"/>
		</div>
		<div class="event-info">
			<div class="club">
				{club}
			</div>
	    <div class="title">
				{title}
			</div>
			<div class="description">
				{description}
			</div>
	  </div>
		<div class="event-details">
			<div class="event-image">
				<img src={image} alt={title} class="event-image"/>
			</div>
			<div class="event-data">
				<p>Time - {time}</p>
				<p>Date - {date}</p>
				<p>Venue - {venue}</p>
			</div>
		</div>
	</div>
</div>
	


<style>
	.event-card {
		background: #f6a55f;
		padding: 5px;
		margin-bottom: 33px;
		border-radius: 50px;
		width: 883px;
		height:317px;
	}
	.content {
		display: inline-flex;
	}
	.club-logo {
		width: 70px;
		height: 70px;
		border-radius: 35px;
		display: inline-flex;
		margin-top: 10px;
		margin-left: 10px;
	}
	.event-info {
		display: block;
		font-family: "Poppins", Helvetica, sans-serif;
	}
	.club {
		display: block;
		font-size: 14px;
		margin-left: 30px;
		margin-top: 28px;
		margin-bottom: 4.5px;
		font-size: 14px;
		width: 147px;
		height: 17px;
	}
	.title {
		display: block;
		font-size: 20px;
		font-weight: bold;
		margin-left: 30px;
		margin-top: 4.5px;
		margin-bottom: 8px;
		font-size: 20px;
		width: 290px;
		height: 28px;
	}
	.description {
		display: block;
		font-size: 20px;
		margin-left: 30px;
		margin-right: 50px;
		font-size: 15px;
		width: 450px;
	}
	.event-details {
		display:  block;
	}
	.event-image {
		display: block;
		width: 208px;
		height: 208px;
		margin-top: 20px;
	}
	.event-data {
		display: block;
		width: 190px;
		height: 67px;
		/* line-height: 0px; */
}
</style>
