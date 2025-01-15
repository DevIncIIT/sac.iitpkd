<script lang="ts">
    import MainPageContent from "$lib/components/Dashboard/MainPageContent.svelte";
</script>

<div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="w-[94vw] mx-auto py-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Faculty</h1>
        <div class="w-[12rem] h-2 bg-orange-500 mb-8"></div>
        <p class="text-xl text-gray-600 max-w-6xl">
            Meet our dedicated faculty members who guide and support student affairs at IIT Palakkad.
        </p>
    </div>

    <!-- Faculty Section -->
    <div class="bg-gray-50 py-16">
        <div class="w-[94vw] mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                <!-- Dean of Students -->
                <div class="flex flex-col items-center">
                    <div class="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                        <img
                            src="/placeholder-dean.jpg"
                            alt="Dean of Students"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-800">Dr. John Smith</h3>
                    <p class="text-xl text-orange-500 mt-2">Dean of Students</p>
                    <p class="text-gray-600 mt-4 text-center max-w-md">
                        Responsible for overseeing student welfare and development, 
                        ensuring a positive academic environment and student experience.
                    </p>
                    <div class="mt-4 text-gray-600">
                        <p>Email: dean_students@iitpkd.ac.in</p>
                        <p>Office: Academic Block, Room 101</p>
                    </div>
                </div>

                <!-- Student Advisor -->
                <div class="flex flex-col items-center">
                    <div class="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                        <img
                            src="/placeholder-advisor.jpg"
                            alt="Student Advisor"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-800">Dr. Sarah Johnson</h3>
                    <p class="text-xl text-orange-500 mt-2">Student Advisor</p>
                    <p class="text-gray-600 mt-4 text-center max-w-md">
                        Provides guidance and support to students in academic and personal matters,
                        helping them navigate their college journey successfully.
                    </p>
                    <div class="mt-4 text-gray-600">
                        <p>Email: student_advisor@iitpkd.ac.in</p>
                        <p>Office: Academic Block, Room 102</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

