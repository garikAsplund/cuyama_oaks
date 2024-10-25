<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import MobileFooter from '$lib/MobileFooter.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	let { children } = $props();
	let scrollY: number = $state(0);
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Raleway:wght@500&display=swap"
		rel="stylesheet"
	/></svelte:head
>

<div class="relative z-0 min-h-screen overflow-hidden">
	<!-- Background image -->
	<enhanced:img
		src="/static/cuyama_oaks_bg.jpeg"
		alt="Cuyama Oaks Ranch"
		class="w-full h-full fixed inset-0 object-cover"
	/>	

	<!-- Optional overlay for better text visibility -->
	<div class="fixed inset-0 bg-black/30"></div>

	<Nav />

	<!-- Hero text -->
	<header
		class="fixed w-full transition-all duration-300 z-10"
	>
		<div class="container mx-auto px-4 py-6 text-center">
			<h1
				class="text-4xl md:text-8xl md:font-bold text-white transition-all font-['Bona_Nova_SC'] translate-y-0 md:translate-y-[40vh]"
				class:text-7xl={scrollY < 100}
			>
				Cuyama Oaks Ranch
			</h1>
		</div>
	</header>

	<main class="w-full h-full flex items-center justify-center">
		{@render children()}
	</main>

	<div class="h-full"></div>

	<Footer />
	<MobileFooter />
</div>
