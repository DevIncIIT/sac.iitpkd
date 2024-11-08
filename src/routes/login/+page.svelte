<script>
    import Icon from "svelte-awesome/components/Icon.svelte";
    import userCircle from "svelte-awesome/icons/userCircle";
</script>

<div class="bg-container d-flex justify-content-center align-items-center">
    <div class="card lgcard rounded-0">
        <div class="card-body">
            <div class="heading">
                <p class="h4 my-3" style="text-align: center;">
                    Welcome to SAC Portal
                </p>
            </div>

            <div class="card mb-3 border-0 my-5" style="max-width: 540px;">
                <div
                    class="row g-0 no-gutters d-flex align-items-center justify-content-center gap-2"
                >
                    <div class="col-md-4" style="width: 15rem;">
                        <img
                            src="iitlogo.jpg"
                            class="img-fluid rounded-start"
                            alt="IIT Logo"
                        />
                    </div>

                    <div class="col-md-4 p-0" style="width: 18rem;">
                        <div
                            class="card-body d-flex justify-content-center align-items-center flex-column"
                            style="padding: 0;"
                        >
                            <h5
                                class="card-title heading_1"
                                style="text-align: center;"
                            >
                                Sign in into your SAC Account
                            </h5>

                            <button
                                type="button"
                                class="btn btn-outline-primary my-4 p-1 pe-3"
                            >
                                <img
                                    src="google_2.png"
                                    class="img-fluid rounded-start me-3"
                                    alt="Google Logo"
                                    style="max-width: 80%; height: auto;"
                                />
                                Sign in with Google
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-primary p-1 my-3 pe-3"
                            >
                                <Icon data={userCircle} />
                                Continue as a Guest
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import 'bootstrap/dist/css/bootstrap.min.css';
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
    }

    @media screen and (max-width: 750px) {
        .lgcard {
            width: 70vw;
        }
    }

    .btn {
        font-size: smaller;
        color: rgb(79, 75, 75);
        border-radius: 0;
        border-color: rgb(79, 75, 75);
        font-weight: 500;
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
</style>
