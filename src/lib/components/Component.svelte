<script>
	let {
		Heading,
		HeadingWithArrows,
		Body,
		content_lines,
	}= $props();
</script>
<div>
	<div class="Heading" >
	<h1 style="font-size:40px ;"> 
		{Heading}
	</h1>
		<div class="underLine"> </div>
</div> 
<div class="Body">
	<p>
		{Body}
	</p>
</div>
<div class="content_lines">
	
	
	{#each content_lines as  line }
	
	<div style="display:inline-flex" >
	<div class="bullet"></div>
	<p style="display : inline; margin : 5px ; font-size : 20px;">
		{line}
	</p>	
	</div>
	{/each}	
</div>
</div>
<style>
	:global(*){
font : Poppins;	
	}
	.underLine {
		background-color : rgba(243, 130, 33, 1);
		width : 286px;
		height : 12px;
		border-radius : 18px;
	}
	.bullet {
		background-color : rgba(243, 130, 33, 1);
		width : 24.88px ;
		height : 27px;
		border-radius : 60%;
		margin-top : 9px;
		
	}
	.Heading{
		color: rgba(94, 96, 96, 1);

	}
</style>
