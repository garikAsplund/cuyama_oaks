<script lang="ts">
	import { onMount } from 'svelte';

	let activeCard = 0;
	let backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'];
	let linearGradients = [
		'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
		'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
		'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))'
	];

	export let content: { title: string; description: string }[] = [
		{ title: 'Cuyama Buckhorn', description: 'A timeless roadside restaurant & inn in the heart of California’s high desert.' },
		{ title: 'Richardson Park', description: 'Take a picnic, dive into the community pool, or skate at Cuyama’s new skate park.' },
		{ title: 'Mt. Pinos', description: 'Stargaze at one of the best places to view the night sky in California.' },
		{ title: 'Los Padres National Forest', description: 'Hike in pristine natural surroundings and explore suggested routes.' },
		{ title: 'Petting Zoo', description: 'Relax and enjoy cuddling with our friendly animals.' },
		{ title: 'Carrizo Plain National Monument', description: 'Explore salt flats, hike to cave paintings, and see California’s wildflowers.' },
		{ title: 'Burger Barn & Deli', description: 'Grab a bite at the Burger Barn attached to C&H market.' }
		// Add more items as needed
	];

	let ref: HTMLDivElement;

	onMount(() => {
		const handleScroll = () => {
			const scrollYProgress = ref.scrollTop / (ref.scrollHeight - ref.clientHeight);
			const cardsBreakpoints = content.map((_, index) => index / content.length);

			cardsBreakpoints.forEach((breakpoint, index) => {
				if (scrollYProgress > breakpoint - 0.2 && scrollYProgress <= breakpoint) {
					activeCard = index;
				}
			});
		};

		ref.addEventListener('scroll', handleScroll);

		return () => {
			ref.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	bind:this={ref}
	style="background-color: {backgroundColors[activeCard % backgroundColors.length]}"
	class="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 transition ease-in-out"
>
	<div class="relative flex items-start px-4">
		<div class="max-w-2xl">
			{#each content as item, index (item.title)}
				<div class="my-20">
					<h2
						style="opacity: {activeCard === index ? 1 : 0.3}"
						class="text-2xl font-bold text-slate-100"
					>
						{item.title}
					</h2>
					<p
						style="opacity: {activeCard === index ? 1 : 0.3}"
						class="mt-10 max-w-sm text-slate-300"
					>
						{item.description}
					</p>
				</div>
			{/each}
			<div class="h-40" />
		</div>
	</div>
	<div
		style="background: {linearGradients[activeCard % linearGradients.length]}"
		class="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block"
	></div>
</div>
