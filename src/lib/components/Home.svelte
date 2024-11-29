<script>
  import Announcements from "./Component.svelte";
  const pkg1 = {
    Heading: "ANNOUNCEMENT",
    content_lines: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    Body: ''
  };
  
  import AboutUs from "./Component.svelte";
  const pkg2 = {
    Heading: "ABOUT US",
    Body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    content_lines: []
  };
  
  import Councils from "./Component.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  const pkg3 = {
    Heading: "COUNCILS",
    Body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content_lines: []
  };
  
  import Carousel1 from "./Carousel.svelte"; // Import the Carousel1 component
  
  // List of images for the carousel
  const images = [
    { url: "/carousel.jpg", alt: "Image 1 Description" },
    { url: "/carousel.jpg", alt: "Image 2 Description" },
    { url: "/carousel.jpg", alt: "Image 3 Description" },
  ];
	import Councilpics from "./Carousel.svelte";
	const councilpics = [
		{ url: "/council.jpg", alt: "Council 1 Description" },
    { url: "/council.jpg", alt: "Council 2 Description" },
    { url: "/council.jpg", alt: "Council 3 Description" },
	];
</script>

<Header />
<div class="container">
  <div style="margin-bottom:100px;"><Announcements {...pkg1} /></div>
  <Carousel1 {images} /> <!-- Pass images array to the carousel -->
  <div style="margin-bottom:100px;"><AboutUs {...pkg2} /></div>
  <div><Councils {...pkg3} /></div>
	<Councilpics {...councilpics}/>
</div>
<Footer />

<style>
  .container {
    background-image: url(/HomeBG);
		/* background-color:white; */
  }
</style>
