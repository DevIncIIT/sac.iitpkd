<script lang="ts">
    import MainPageContent from "$lib/components/Dashboard/MainPageContent.svelte";
    import { Input } from "$lib/components/ui/input/index.ts";
    import { Label } from "$lib/components/ui/label/index.ts";
    import Button from "$lib/components/ui/button/button.svelte";
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
    <div class=" h-[50vh] flex items-center justify-center">
        <div class="h-[50vh] flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg w-full max-w-[55vw]">
              <div class="flex w-full flex-col gap-1.5 items-center">
                <form method="POST">
          
                  <label for="email-2" class="font-medium text-gray-700 w-full">Email</label>
                  <input
                    type="email"
                    id="email-2"
                    placeholder="Email"
                    name="email"
                    class="w-full mb-3 border border-gray-300 p-2 rounded-md"
                  />
          
                  <label for="text" class="font-medium text-gray-700 w-full">Grievance</label>
                  <textarea
                    id="text"
                    placeholder="Enter your grievances"
                    name="griv"
                    rows="4"
                    class="w-full mb-1 border border-gray-300 p-2 rounded-md"
                  ></textarea>
          
                  <button type="submit" class="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>


</div>
