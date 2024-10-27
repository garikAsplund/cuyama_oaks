<!-- GlampingSection.svelte -->
<script lang="ts">
	import { amenities } from '$lib/amenities';
	import AmenityCard from '$lib/AmenityCard.svelte';
	import AmenityCardMobile from '$lib/AmenityCardMobile.svelte';

	let { scrollY } = $props();
	const baseHeight = 10; // vh units per card
	const minHeight = 100; // minimum vh

	let sectionHeight = $derived(`${Math.max(minHeight, baseHeight * amenities.length)}vh`);
</script>

<section class=" relative bg-teal-300 w-full" style="height: {sectionHeight}" id="Glamping">
	<div class="sticky top-0 md:p-16 lg:pl-32 md:top-20 flex justify-between z-30 w-full">
		<div class="w-1/3 p-8 lg:p-16 md:pl-16 hidden md:block">
			<h1 class="text-4xl lg:text-8xl mb-24" style="transform: translateY({scrollY * 0.04}px);">
				Glamping
			</h1>
		</div>
        <div
		class="sticky top-0 flex justify-center items-center z-40 w-full bg-teal-300 h-36 md:hidden"
	>
		<h1 class="text-6xl md:text-8xl opacity-90">Glamping</h1>
	</div>
	</div>

	<!-- <div class="space-y-12 w-1/2 absolute right-10 z-10 hidden md:block">
		{#each amenities as { title, items, offset }, i}
			<AmenityCard {title} {items} {offset} index={i} {scrollY} />
		{/each}
	</div>
    <div class="space-y-12 w-full px-4 z-10 md:hidden block h-auto">
		{#each amenities as { title, items, offset }, i}
			<AmenityCardMobile {title} {items} {offset} index={i} {scrollY} />
		{/each}
	</div> -->
</section>
