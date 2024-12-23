<script>
    import Icon from "svelte-awesome/components/Icon.svelte";
    import userCircle from "svelte-awesome/icons/userCircle";
    import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
    // import { Button } from 'flowbite-svelte';
</script>

<div class="bg-container d-flex justify-content-center align-items-center">
    <div class="card lgcard  ">
        <div class="card-body">
            <div class="heading">
                <p class="h4 my-3" style="text-align: center; bold: 700">
                    WELCOME TO SAC PORTAL
                </p>
            </div>

            <div class="card mb-3 my-5 border-0" >
                <div
                    class="row g-0 no-gutters d-flex align-items-center justify-content-center gap-2"
                >
                    <div class="col-md-4" style="width: 17rem; ">
                        <img
                            src="iitlogo.jpg"
                            class="logo  rounded-start"
                            alt="IIT Logo"
                        />
                    </div>

                    <div class="col-md-4 p-0" style="width: 22rem; ">
                        <Card class="border-0">
                            <form class="flex flex-col space-y-6" action="/">
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Login in into your SAC Account</h3>
                                <Label class="space-y-1">
                                    <span>User</span>
                                    <Input class="h-10 border-2" type="email" name="email" placeholder="" required />
                                </Label>

                                <Label class="space-y-1">
                                    <span>Password</span>
                                    <Input class="h-10 border-2" type="password" name="password" placeholder="" required />
                                </Label>
                                <div class="all_btn items-start">
                                    <button class="btn">
                                        <img
                                            src="google_2.png"
                                            class="img-fluid rounded-start me-2"
                                            alt="Google Logo"
                                            style="max-width: 40%; height: 40%;"
                                        />
                                        Sign in with Google
                                    </button>
                                    <button class="btn">
                                        <Icon class="w-9 h-9" data={userCircle} />
                                        <span class="ml-2" style="color: rgb(79, 75, 75);">Continue as guest</span>
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .bg-container {
        background-image: url("/bg-4.jpg");
        background-size: cover;
        background-position: center;
        height: 100vh;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    .login {
        background-color: aliceblue;
    }

    .lgcard {
        width: 45rem;
        border-radius: 1.5rem;
    }

    @media screen and (max-width: 750px) {
        .lgcard {
            width: 70vw;
        }
        .all_btn{
            display: flex;
        }
    }
    @media screen and (max-width: 550px) {
        .all_btn{
            flex-direction: column;
        }
    }


    .heading_1 {
        font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif;
        font-weight: 380;
    }
    .btn{
        /* border: 1px solid blue; */
        color: rgb(79, 75, 75);
        display: flex;
        min-width: 50%;
        font-size: medium;
        border-color: rgb(79, 75, 75);
        /* color: grey; */
    }
    
    .all_btn{
        gap: 5%;
        display: flex;
    }
</style>2
