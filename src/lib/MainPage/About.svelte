<script lang="ts">
	import { onMount } from 'svelte';
	import TV from '$lib/SVGs/TV.svelte';

	let { scrollY } = $props();
	let imageHeight = $state(0);

	onMount(() => {
		let imageElement: HTMLDivElement = document.getElementById('your-hosts');

		function calculateImageHeight() {
			if (imageElement) {
				imageHeight = imageElement.offsetHeight; 
			}
		}
		calculateImageHeight();
		window.addEventListener('resize', calculateImageHeight);
		return () => {
			window.removeEventListener('resize', calculateImageHeight);
		};
	});
</script>

<section class=" z-30 bg-white relative" id="About">
	<div class="overflow-hidden">
		<section class="relative w-full flex justify-center z-30 md:h-[77vh] h-auto">
			<div
				class=" top-20 right-[5%] w-1/2 z-30 absolute"
				style="height: {imageHeight}px; background: linear-gradient(45deg, rgba(255, 0, 0, 0.13), rgba(255, 154, 0, 0.13), rgba(255, 255, 0, 0.13), rgba(0, 255, 0, 0.13), rgba(0, 0, 255, 0.13), rgba(75, 0, 130, 0.13), rgba(143, 0, 255, 0.13)); transform: translateY(calc({scrollY} * 0.12px));"
			></div>

			<enhanced:img
				src="/static/about/nate+ricky.jpeg"
				id="your-hosts"
				alt="Your hosts Nate and Ricky"
				loading="lazy"
				sizes="(min-width: 768px) 50vw, 100vw"
				class="object-contain absolute top-20 right-[5%] w-1/2 z-20"
				style="transform: translateY(calc({scrollY} * 0.12px));"
			/>

			<div
				class="relative z-20 w-full bg-white/75 h-auto md:pt-0 flex flex-col justify-center items-start p-8 pl-8 md:pl-16 lg:pl-32 xl:pl-48 mx-auto space-y-4"
			>
				<div class="max-w-4xl space-y-4 mt-48">
					<h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 w-full">Your hosts</h1>
					<p class="w-5/6 pl-4 md:pl-8 text-xl">
						We met in Ventura and love seeking new adventures.
					</p>
					<p class="w-5/6 pl-4 md:pl-8 text-xl">
						The pandemic gave us a chance to create a special LGBTQIA getaway when options were
						limited.
					</p>
					<p class="w-5/6 pl-4 md:pl-8 text-xl">
						Since then, we've grown a welcoming family environment where you can <b
							>relax and have fun</b
						>.
					</p>
					<h2 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 w-full pt-12">The ranch</h2>
					<p class="w-5/6 pl-4 md:pl-8 text-xl">
						Located 2.5 hours northwest of Los Angeles, Cuyama Oaks Ranch is an 82-acre property nestled at the base of the Sierra Madre
						Mountains.
					</p>
					<p class="w-5/6 pl-4 md:pl-8 text-xl">
						Offering 360-degree views and close to <b>hiking, wine country, and the beach</b>, it provides
						a private, secluded high desert getaway just off Route 166.
					</p>
				</div>
				<a href="https://www.imdb.com/title/tt27508619/" target="_blank" rel="noopener noreferrer" aria-label="As seen on TV" class="hover:opacity-80">
				<TV />
				</a>
			</div>
		</section>
	</div>
</section>
