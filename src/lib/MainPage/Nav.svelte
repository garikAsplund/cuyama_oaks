<script lang="ts">
	import BookNowButton from '$lib/BookNowButton.svelte';
	import BookNowNavButton from '$lib/BookNowNavButton.svelte';
	import Instagram from '$lib/Instagram.svelte';
	import LogoSvg from '$lib/SVGs/LogoSVG.svelte';
	import WeatherWidget from '$lib/WeatherWidget.svelte';
	import { fade } from 'svelte/transition';

	let { scrollY, isVisible } = $props();
	const colorValue = $derived(Math.round(255 - scrollY * 0.2));
</script>

<nav
	class="fixed top-0 w-full md:flex justify-between items-center hidden backdrop-blur-md z-40"
	style="--nav-color: rgb({colorValue}, {colorValue}, {colorValue}, 0.87);"
>
	<div class="mx-8 flex items-center space-x-4 nav-items">
		<a href="#top" class="flex items-center hover:opacity-75 nav-items" aria-label="Back to the top of the page">
			<LogoSvg />
		</a>
		<a href="#About" class="p-2 hover:opacity-75" aria-label="About us">About</a>
		<a href="#Glamping" class="p-2 hover:opacity-75" aria-label="Glamping">Glamping</a>
		<a href="#Camping" class="p-2 hover:opacity-75" aria-label="Camping">Camping</a>
		<a href="#ThingsToDo" class="p-2 hover:opacity-75" aria-label="Explore">Explore</a>
	</div>
	<div class="flex justify-between items-center nav-items">
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
