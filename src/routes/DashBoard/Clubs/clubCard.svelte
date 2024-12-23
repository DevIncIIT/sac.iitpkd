<script>
    export let clubImage, clubName;
</script>

<div class="clubcard">
    <div class="img" style="background-image: url({clubImage});"></div>
    <div class="name text-center text-lg font-medium">{clubName}</div>
</div>

<style>
    .clubcard{
        cursor: pointer;
    }
    .img{
        width: 15rem;
        height: 15rem;
        background-size: cover;
        background-position: center;
        border-radius: 1rem;
    }
</style>