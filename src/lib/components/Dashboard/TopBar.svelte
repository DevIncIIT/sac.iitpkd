<script lang="ts">
    export let userName: string;
</script>

<div class="d-flex justify-content-between">
    <a href='/'>
        <div class="left-logo d-flex align-items-center mt-4 mb-4 ml-3">
            <img id="img-logo" src="/SACLogo.svg" alt="logo"/>
            <img id="text-logo" src="/SACTagline.svg" alt="logo-text"/>
        </div>
    </a>
    <!-- <button onclick={hamburger} aria-label="hamburgerButton" id="ham" class="p-4">
        <i class="fa-solid fa-bars fa-2xl"></i>
    </button> -->
    <div class="d-flex justify-content-end items-center mr-4 mt-4">
        <span style="color: #5E6060;" class="fs-5 fw-semibold">{userName}</span>
        <img src="/placeholder.png" alt="profile-pic" class="rounded-5 ml-4" />
    </div>
</div>