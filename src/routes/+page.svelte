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

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>Cuyama Oaks Ranch</title>
	<meta
		name="description"
		content="Discover the hidden gems of Cuyama Oaks Ranch, a glamping and camping destination for family and friends!"
	/>
</svelte:head>

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

		<section class="scroll-mt-12" id="About">
			<div class="overflow-hidden">
				<section class="relative w-full flex justify-center h-[66vh]">
					<enhanced:img
						src="/static/nate+ricky.jpeg"
						alt="Your hosts Nate and Ricky"
						class="object-contain absolute top-20 right-[5%] w-1/2 -z-10"
						style="transform: translateY(calc({scrollY} * 0.02px));"
					/>

					<div
						class="relative -z-10 w-full bg-white/75 h-screen flex flex-col justify-center items-start p-8 pl-8 md:pl-16 lg:pl-32 xl:pl-48 mx-auto space-y-4"
						style="transform: translateY(calc({scrollY} * -0.21px));"
					>
						<h1 class="text-2xl md:text-4xl lg:text-8xl font-bold mb-4 w-full">Your hosts</h1>
						<p class="text-justify w-5/6 pl-4 md:pl-8">
							We met in Ventura and love seeking new adventures.
						</p>
						<p class="text-justify w-5/6 pl-4 md:pl-8">
							The pandemic gave us a chance to create a special LGBTQIA getaway when options were
							limited.
						</p>
						<p class="text-justify w-5/6 pl-4 md:pl-8">
							Since then, we've grown a welcoming family environment where you can <b
								>relax and have fun</b
							>.
						</p>
					</div>
				</section>
			</div>
		</section>
	</div>

	<main class="relative flex-1 w-full max-w-screen">
		<section class="h-[300vh] relative bg-teal-300 w-full" id="Glamping">
			<div class="sticky top-0 md:p-16 lg:p-32 md:top-20 flex justify-between z-30 w-full">
				<div class="w-1/3 p-8 lg:p-16 bg-white/70 md:pl-16 hidden md:block">
					<h1 class="text-4xl mb-4">Glamping Sites</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.</p>
				</div>
				<div class="pt-12 flex justify-center items-center z-40 w-full bg-teal-300 h-36 md:hidden">
					<h1 class="text-6xl md:text-8xl font-bold opacity-90">Glamping</h1>
				</div>
			</div>
			<div
				class="w-full md:w-2/3 absolute right-0 px-4 lg:pr-8 h-[300vh] flex flex-col justify-start items-end space-y-96"
			>
				{#each glampsites as { name, description, link }}
					<a
						href={link}
						class="mb-4 mt-96 bg-white/70 p-8 rounded-lg shadow-lg w-5/6 md:w-2/3"
						style="transform: translateY(calc({scrollY * -0.1}px))"
					>
						<h2 class="text-4xl font-bold">{name}</h2>
						<p>{description}</p>
					</a>
				{/each}
			</div>
		</section>

		<!-- <section
        class="sticky h-screen bg-cover bg-center flex justify-center items-center z-10 max-w-full"
        style="background-image: url('/parallax_4.jpeg');"
    >
     </section> -->
		<enhanced:img
			src="/static/parallax_4.jpeg"
			alt="Cuyama Oaks Ranch"
			class="sticky h-screen object-cover bg-cover bg-center flex justify-center items-center z-10 max-w-full"
		/>

		<section
			class="relative h-[150vh] p-8 bg-yellow-300 flex flex-col z-5 max-w-full scroll-mt-12"
			id="Camping"
		>
			<h2
				class="sticky top-16 font-bona text-6xl md:text-8xl mt-12 md:mt-48 pr-16 lg:pr-32 lg:text-end text-center w-full hidden md:block"
			>
				Camping
			</h2>
			<div
				class="sticky top-0 flex font-bona justify-center items-center z-40 w-full bg-yellow-300 h-36 md:hidden"
			>
				<h1 class="text-6xl md:text-8xl opacity-90">Camping</h1>
			</div>
			<div
				class="w-full md:w-2/3 md:pl-32 px-4 lg:pr-8 h-auto flex flex-col justify-start items-start space-y-16 mt-20"
			>
				{#each campsites as { name, description, link }}
					<a href={link} class="mb-4 bg-white p-8 rounded-lg shadow-lg w-5/6 md:w-2/3">
						<h2 class="text-4xl font-bold">{name}</h2>
						<p>{description}</p>
					</a>
				{/each}
			</div>
		</section>

		<!-- <section
			class="sticky h-[66vh] bg-cover bg-center flex justify-center items-center z-10 max-w-full"
			
		> -->
		<enhanced:img
			src="/static/parallax_2.jpeg"
			alt="Cuyama Oaks Ranch"
			class="w-full object-cover sticky h-[66vh] bg-cover bg-center flex justify-center items-center z-10 max-w-full"
		/>
		<!-- </section> -->

		<section
			class="sticky top-0 h-screen p-8 bg-blue-300 flex flex-col z-5 max-w-full"
			id="ThingsToDo"
		>
			<h2 class="font-bona text-8xl flex justify-center mt-24">Explore</h2>

			<!-- <div
				class="w-full md:w-2/3 mx-auto px-4 lg:pr-8 h-auto flex flex-col justify-start items-end space-y-24 mt-24"
			>
				{#each explore as { name, description, link }}
					<a href={link} class="mb-4  p-8 w-5/6 md:w-2/3">
						<h2 class="text-4xl font-bold">{name}</h2>
						<p>{description}</p>
					</a>
				{/each}
			</div> -->
			<!-- <Explore /> -->
		</section>

		<section
			class="sticky h-screen bg-center flex justify-center items-center z-10 saturate-[55%] max-w-full"
		>
			<enhanced:img
				src="/static/parallax_3.jpeg"
				alt="Cuyama Oaks Ranch"
				class="absolute inset-0 w-full h-full object-cover z-0"
			/>
			<ToTopButton class="relative z-10" />
			<!-- Ensure the button stays above the image -->
		</section>

		<div class="sticky h-14 bg-orange-400 flex justify-center items-center text-white w-full"></div>
	</main>
	<div class="overflow-x-hidden">
		<Footer />
		<MobileFooter />
	</div>
</div>
