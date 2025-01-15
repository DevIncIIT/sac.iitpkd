<script lang="ts">
    import MainPageContent from "$lib/components/Dashboard/MainPageContent.svelte";
</script>

<div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="w-[94vw] mx-auto py-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">{"<Dev/nc>"}</h1>
        <div class="w-[12rem] h-2 bg-orange-500 mb-8"></div>
        <p class="text-xl text-gray-600 max-w-6xl">
            The Student Affairs Committee (SAC) website is made by DevInc, a
            student-run development group dedicated to building innovative
            solutions and fostering technical excellence within IIT Palakkad.
        </p>
    </div>

    <!-- Head Section -->
    <div class="bg-gray-50 py-16">
        <div class="w-[94vw] mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12">Leadership</h2>
            <div class="flex flex-col items-center">
                <div
                    class="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg"
                >
                    <img
                        src="/placeholder-head.jpg"
                        alt="Head of DevInc"
                        class="w-full h-full object-cover"
                    />
                </div>
                <h3 class="text-2xl font-semibold text-gray-800">John Doe</h3>
                <p class="text-gray-600 mt-2">Head of DevInc</p>
            </div>
        </div>
    </div>

    <!-- Team Section -->
    <div class="w-[94vw] mx-auto py-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-12">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- Team Member 1 -->
            <div class="flex flex-col items-center group">
                <div
                    class="w-40 h-40 rounded-lg overflow-hidden mb-4 shadow-md transition-transform duration-300 group-hover:scale-105"
                >
                    <img
                        src="/placeholder-member1.jpg"
                        alt="Team Member"
                        class="w-full h-full object-cover"
                    />
                </div>
                <h3 class="text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p class="text-gray-600">Frontend Developer</p>
            </div>

            <!-- Team Member 2 -->
            <div class="flex flex-col items-center group">
                <div
                    class="w-40 h-40 rounded-lg overflow-hidden mb-4 shadow-md transition-transform duration-300 group-hover:scale-105"
                >
                    <img
                        src="/placeholder-member2.jpg"
                        alt="Team Member"
                        class="w-full h-full object-cover"
                    />
                </div>
                <h3 class="text-xl font-semibold text-gray-800">
                    Mike Johnson
                </h3>
                <p class="text-gray-600">Backend Developer</p>
            </div>

            <!-- Team Member 3 -->
            <div class="flex flex-col items-center group">
                <div
                    class="w-40 h-40 rounded-lg overflow-hidden mb-4 shadow-md transition-transform duration-300 group-hover:scale-105"
                >
                    <img
                        src="/placeholder-member3.jpg"
                        alt="Team Member"
                        class="w-full h-full object-cover"
                    />
                </div>
                <h3 class="text-xl font-semibold text-gray-800">
                    Sarah Williams
                </h3>
                <p class="text-gray-600">UI/UX Designer</p>
            </div>
        </div>
    </div>

    <!-- About Section -->
    <div class="bg-gray-50 py-16">
        <MainPageContent
            heading="What We Do"
            content="DevInc is at the forefront of technological innovation at IIT Palakkad. We develop web applications, mobile solutions, and software tools that serve the campus community. Our team comprises passionate developers, designers, and problem solvers who work together to create meaningful impact through technology. We believe in learning by doing and fostering a collaborative environment where creativity meets technical expertise."
        />
    </div>
</div>
