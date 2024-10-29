<script lang="ts">
	import '../app.css';

	import BookNowButton from '$lib/BookNowButton.svelte';
	import Footer from '$lib/MainPage/Footer.svelte';
	import MobileFooter from '$lib/MainPage/MobileFooter.svelte';
	import Nav from '$lib/MainPage/Nav.svelte';
	import ToTopButton from '$lib/ToTopButton.svelte';
	import Explore from '$lib/MainPage/Explore.svelte';
	import Reviews from '$lib/MainPage/Reviews.svelte';
	import About from '$lib/MainPage/About.svelte';
	import Glamping from '$lib/MainPage/Glamping.svelte';
	import Camping from '$lib/MainPage/Camping.svelte';
	import { onMount } from 'svelte';

	let scrollY = $state(0);

	let isVisible = $state(true);
    let cardElement: HTMLElement;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    // observer.unobserve(entry.target); // Stop observing once visible
                } else {
					isVisible = false;
				}
            });
        }, {
            threshold: 0,
            rootMargin: ''
        });

        observer.observe(cardElement);

        return () => observer.disconnect();
    });
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
				<Nav {scrollY} {isVisible}/>
				<header class="absolute inset-0 flex flex-col justify-center items-center text-center" bind:this={cardElement}>
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
		<Footer {scrollY}/>
		<MobileFooter />
	</div>
</div>

<style>
	.animate-on-scroll {
		opacity: 0;
		filter: blur(5px);
		transform: translateY(20px);
		transition: all 1s ease-out;
	}

	.animate-on-scroll.show {
		opacity: 1;
		filter: blur(0);
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.animate-on-scroll {
			transition: none;
			opacity: 1;
			filter: none;
			transform: none;
		}
	}
</style>
