<script lang="ts">
	import BookNowButton from '$lib/BookNowButton.svelte';
	import { fade, slide } from 'svelte/transition';
	import Footer from '$lib/Footer.svelte';
	import MobileFooter from '$lib/MobileFooter.svelte';
	import Nav from '$lib/Nav.svelte';
	import { campsites } from '$lib/campsites';
	import { glampsites } from '$lib/glampsites';
	import { explore } from '$lib/explore';
	import '../app.css';
	import ToTopButton from '$lib/ToTopButton.svelte';
	import Explore from '$lib/Explore.svelte';
	import Reviews from '$lib/Reviews.svelte';
	import About from '$lib/About.svelte';
	import Glamping from '$lib/Glamping.svelte';
	import Camping from '$lib/Camping.svelte';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<!-- Remove overflow-x-hidden from root -->
<div class="relative z-0 flex flex-col min-h-screen w-full max-w-screen">
	<!-- Add a wrapper div with overflow-x-hidden around content that needs containment -->
	<div class="overflow-x-hidden">
		<!-- Fullscreen background image -->
		<div class="relative h-auto">
			<div class="relative h-screen">
				<enhanced:img
					src="/static/cuyama_oaks_bg.jpeg"
					alt="Cuyama Oaks Ranch"
					class="w-full h-full object-cover"
				/>
				<div class="absolute inset-0 bg-black bg-opacity-30"></div>

				<Nav />

				<header class="absolute inset-0 flex flex-col justify-center items-center text-center">
					<div class="container mx-auto" style="transform: translateY(calc({scrollY * -1.05}px))">
						<h1 class="text-4xl md:text-8xl md:font-bold text-white font-bona transition-all">
							Cuyama Oaks Ranch
						</h1>
						<BookNowButton />
					</div>
				</header>
			</div>
			<div class="container mx-auto z-70" style="transform: translateY(calc({scrollY * -1.45}px))">
				<Reviews />
			</div>
		</div>

		<!-- About -->
		<About {scrollY} />
	</div>

	<main class="relative flex-1 w-full max-w-screen">
		<!-- Glamping -->
		<Glamping {scrollY} />

		<!-- Goats -->
		<enhanced:img
			src="/static/parallax_4.jpeg"
			alt="Cuyama Oaks Ranch"
			class="sticky h-screen object-cover bg-cover bg-center flex justify-center items-center z-10 max-w-full"
		/>

		<!-- Camping -->
		<Camping />

		<!-- Fun -->
		<enhanced:img
			src="/static/parallax_2.jpeg"
			alt="Cuyama Oaks Ranch"
			class="w-full object-cover sticky h-[66vh] bg-cover bg-center flex justify-center items-center z-10 max-w-full"
		/>

		<!-- Things To Do -->
		<Explore />

		<!-- Welcome -->
		<section
			class="sticky h-screen bg-center flex justify-center items-center z-10 saturate-[55%] max-w-full"
		>
			<enhanced:img
				src="/static/parallax_3.jpeg"
				alt="Welcome to Cuyama Oaks Ranch"
				class="absolute inset-0 w-full h-full object-cover z-0"
			/>
			<ToTopButton class="relative z-10" />
		</section>

		<div class="sticky h-14 bg-orange-400 flex justify-center items-center text-white w-full"></div>
	</main>

	<div class="overflow-x-hidden">
		<Footer />
		<MobileFooter />
	</div>
</div>
