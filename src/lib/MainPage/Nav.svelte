<script lang="ts">
	import BookNowButton from '$lib/BookNowButton.svelte';
	import BookNowNavButton from '$lib/BookNowNavButton.svelte';
	import Instagram from '$lib/Instagram.svelte';
	import LogoSvg from '$lib/SVGs/LogoSVG.svelte';
	import WeatherWidget from '$lib/WeatherWidget.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let { scrollY, isVisible } = $props();
	const colorValue = $derived(Math.round(255 - scrollY * 0.2));

	let activeSection = $state('');

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{
				threshold: 0.4,
				rootMargin: '44px'
			}
		);

		document.querySelectorAll('section').forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<nav
	class="fixed top-0 w-full md:flex md:justify-between items-center backdrop-blur-md z-40"
	style="--nav-color: rgb({colorValue}, {colorValue}, {colorValue}, 0.87);"
>
	<div
		class="md:px-8 flex items-center md:space-x-4 w-full justify-around md:justify-start nav-items"
	>
		<a
			href="./#top"
			class="flex items-center hover:opacity-75 nav-items md:scale-100 scale-75"
			aria-label="Back to the top of the page"
		>
			<LogoSvg />
		</a>
		<a
			href="./#About"
			class="p-2 hover:opacity-75 {activeSection == 'About' ? 'border-black border-b' : ''}"
			aria-label="About">About</a
		>
		<a
			href="./#Glamping"
			class="p-2 hover:opacity-75 {activeSection === 'Glamping' ? 'border-black border-b' : ''}"
			aria-label="Glamping">Glamping</a
		>
		<a
			href="./#Camping"
			class="p-2 hover:opacity-75 {activeSection === 'Camping' ? 'border-black border-b' : ''}"
			aria-label="Camping">Camping</a
		>
		<a
			href="./#Explore"
			class="p-2 hover:opacity-75 {activeSection === 'Explore' ? 'border-black border-b' : ''}"
			aria-label="Explore">Explore</a
		>
		<a
			href="./#Zoo"
			class="p-2 hover:opacity-75 {activeSection === 'Zoo'
				? 'border-black border-b'
				: ''} hidden md:flex"
			aria-label="Petting Zoo">Petting Zoo</a
		><a
			href="/gallery"
			class="p-2 hover:opacity-75 {activeSection === 'Gallery'
				? 'border-black border-b'
				: ''} hidden md:flex"
			aria-label="Photos">Photos</a
		>
	</div>
	<div class="px-4 justify-between items-center nav-items hidden md:flex">
		{#if !isVisible}
			<div class="px-4" in:fade={{ duration: 1000 }}>
				<BookNowNavButton />
			</div>
		{/if}
		<WeatherWidget />
		<Instagram />
	</div>
</nav>

<style>
	.nav-items,
	.nav-items :global(svg),
	.nav-items :global(*) {
		color: var(--nav-color);
		fill: var(--nav-color);
	}
</style>
