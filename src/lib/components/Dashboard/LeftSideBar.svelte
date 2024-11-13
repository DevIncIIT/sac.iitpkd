<script>
    import { onMount } from "svelte";
    import "../../../app.css";
	import { writable } from "svelte/store";
	let section_buttons_text = ["Dashboard","Clubs","Announcements","Calendar","Live-Events","Opportunities","Budget","More"];
	let selectedInd = writable(-2);
	onMount(() => {
		let selectedIndOption = localStorage.getItem('selectedInd');
		if (selectedIndOption != null) {
			selectedInd.set(parseInt(selectedIndOption));
		} else {
			selectedInd.set(0);
		}
	})
	/**
     * @param {number} index
     */
	function handleClick(index) {
		selectedInd.set(index);
		localStorage.setItem('selectedInd', JSON.stringify(index))
	}
	let hamOpened = writable(false);
	function hamburger() {
		hamOpened.set(!($hamOpened));
	}
</script>

<nav class="left-sidebar">
	<div class="d-flex justify-content-between">
		<div class="left-logo d-flex align-items-center">
			<img id="img-logo" src="SACLogo.png" alt="logo"/>
			<img id="text-logo" src="SACTagline.png" alt="logo-text"/>
		</div>
		<button onclick={hamburger} aria-label="hamburgerButton" id="ham" class="p-4">
			<i class="fa-solid fa-bars fa-2xl"></i>
		</button>
	</div>
	<div class:section-buttons={$hamOpened} class:altSection-buttons={!($hamOpened)}>
		<ul class="p-0">
			{#each section_buttons_text as section_button_text, index}
				<a onclick={() => handleClick(index)} href="/" class="text-black text-decoration-none web-link">
					<li class="gap-3 d-flex align-items-center {($selectedInd === (index-1) || $selectedInd === (index+1)) ? 'AllButtons adjacentButtons' : 'AllButtons nonAdjacentButtons'} {$selectedInd === index ? 'selectedButton' : ''}">
						<img class="icons" src="{section_button_text}.svg" alt="{section_button_text} icon"/>
						<span class="button-text">{section_button_text}</span>
					</li>
				</a>
			{/each}
		</ul>
	</div>
</nav>


<style>
    @import 'bootstrap/dist/css/bootstrap.min.css';
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
	.left-logo {
		width: 322px;
	}

	.adjacentButtons {
		background: #FFCCA0;
	}

	#img-logo {
		width: 81px;
		height: 76px;
	}

	#text-logo {
		width: 200px;
		height: 40px;
	}

	.nonAdjacentButtons {
		background-color: #FFE5D7;
	}

	.AllButtons {
		height: 80px;
		border-radius: 10px;
		padding-left: 66px;
	}

	.selectedButton {
		background-color: #FF9941;
		font-weight: 600;
	}

    .icons {
        height: 20px;
        width: 20px;
    }

	.altSection-buttons {
		display: none;
		width: 322px;
	}

	.section-buttons {
		display: block;
		width: 322px;
	}

	@media screen and (min-width: 768px) 
	{
		#ham {
			display: none;
		}

		.section-buttons, .altSection-buttons {
			display: block !important;
		}
	}

	@media screen and (max-width: 768px)
	{
		.section-buttons, .altSection-buttons {
			width: 100% !important;
		}
	}
</style>

