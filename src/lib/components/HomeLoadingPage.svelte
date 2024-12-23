
<main>
    <div class="landingPage">
        <!-- <img src="/SACLogo-removebg-preview.png" alt="dark">
        <img src="/SACTagline-removebg-preview.png" alt="tagline"> -->
        <img src="/SACLogo-DARK.png" alt="SAC logo dark theme">
        <!-- <Spinner />     -->
        <div class="spinner"></div>
    </div>
</main>
<style>
    .landingPage{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: black;
    }
    img{
        width: 38%; 
        height: auto;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid transparent;
    border-top: 5px solid orange;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    }
    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>