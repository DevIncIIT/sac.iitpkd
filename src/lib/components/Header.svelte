<script lang="ts">
  import { goto } from '$app/navigation';
  export let LoggedIn: boolean;
</script>

<div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 10px;  padding-inline: 3rem">
  <div style="display: flex; align-items: center;">
    <img src="/SACLogo.svg" alt="SAC logo" style="width:94px; height: 111px; margin-right: 10px;" />
    <img src="/SACTagline.svg" alt="SAC Tagline" style="width:291; height: 39px;" />
  </div>

  <div class="Center text-[1.3rem]" style="display: flex; gap: 4rem;">
    <a class="navButton" href="/">Home</a>
    <a class="navButton" href="/council">Council</a>
    <a class="navButton" href="/faculty">Faculty</a>
    <a class="navButton" href="/maintainers">Maintainers</a>
  </div>


  <div>
    {#if LoggedIn}
    <button class="Signin" on:click={() => goto('/dashboard')}>Dashboard</button>
    {:else}
    <button class="Signin" on:click={() => goto('/login')} >Sign in</button>
    {/if}
  </div>
</div>
<style>
	:global(*){
		/* background-color: white; */
		color: rgba(54, 56, 78, 1);

	}
	.navButton{
		border: none;
	}
	.Signin{
		background-color: rgba(243, 130, 33, 1);
		width:117px ;
		height:42px;
		border-radius: 12px;
	}


</style>
