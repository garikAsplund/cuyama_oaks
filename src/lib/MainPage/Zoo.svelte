<script lang="ts">
	import Quote from '$lib/SVGs/Quote.svelte';
</script>

<section
	class="min-h-screen relative h-auto bg-pink-300 p-8 z-30 flex flex-col items-center"
	id="Zoo"
>
	<div class="max-w-7xl space-y-24">
		<h2
			class="sticky top-0 pt-12 md:pt-24 lg:pl-48 md:text-8xl text-6xl text-left w-full bg-pink-300 z-30 pb-4"
		>
			Petting zoo
		</h2>

		<div
			class="text-xl md:text-3xl text-pink-950 space-y-1 max-w-2xl mx-auto md:flex flex-col items-center w-full md:-translate-x-12 hidden"
		>
			<p class="relative">
				<span class="inline-block w-20">Come</span>
				<strong class="text-black/90">dance</strong> with the goats,
			</p>
			<p class="relative">
				<span class="invisible inline-block md:w-28 w-20">Come</span>
				<strong class="text-black/90">cuddle</strong> with the pigs,
			</p>
			<p class="relative">
				<span class="invisible inline-block md:w-36 w-20">Come</span>
				<strong class="text-black/90">quack</strong> with the ducks,
			</p>
			<p class="relative">
				<span class="invisible inline-block md:w-44 w-20">Come</span>
				<strong class="text-black/90">play</strong> with the babies.
			</p>
		</div>
		<div
			class="text-2xl text-pink-950 space-y-2 max-w-2xl mx-auto flex flex-col items-center w-full md:hidden"
		>
			<span class="inline-block w-22">Come</span>
			<div>
				<p class="text-left py-2">
					<strong class="text-black/90">dance</strong> with the goats,
				</p>
				<p class="text-left py-2">
					<strong class="text-black/90">cuddle</strong> with the pigs,
				</p>
				<p class="text-left py-2">
					<strong class="text-black/90">quack</strong> with the ducks,
				</p>
				<p class="text-left py-2">
					<strong class="text-black/90">play</strong> with the babies.
				</p>
			</div>
		</div>
		<div class="flex gap-8 h-full mx-auto xl:w-4/5 md:my-24">
			<!-- Image Section -->
			<div
				class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center h-full gap-4 order-1 md:order-2"
			>
				<enhanced:img
					src="/static/zoo/goats.jpeg"
					alt="Campsite overview"
					loading="lazy"
					sizes="(min-width: 1024px) 800px, min(100vw - 2rem, 600px)"
					class="w-full h-96 object-cover object-center rounded-md"
				/>
				<enhanced:img
					src="/static/zoo/pigs.webp"
					alt="Camp as homebase"
					loading="lazy"
					sizes="(min-width: 1024px) 800px, min(100vw - 2rem, 600px)"
					class="w-full h-96 object-cover object-top rounded-md"
				/>
				<enhanced:img
					src="/static/zoo/eggs.webp"
					alt="Camp at the base of the mountains"
					loading="lazy"
					sizes="(min-width: 1024px) 800px, min(100vw - 2rem, 600px)"
					class="w-full h-96 object-cover object-right rounded-md"
				/>
				<enhanced:img
					src="/static/zoo/chicken.jpeg"
					alt="Camp at the base of the mountains"
					loading="lazy"
					sizes="(min-width: 1024px) 800px, min(100vw - 2rem, 600px)"
					class="w-full h-96 object-cover object-right rounded-md"
				/>
			</div>
		</div>
		<figure class="px-8 pb-16">
			<blockquote
				class="relative text-2xl md:text-4xl font-light text-pink-950 text-center mb-6 leading-relaxed"
				cite="https://www.goodreads.com/quotes/4432-until-one-has-loved-an-animal-a-part-of-one-s"
			>
				<div class="relative flex justify-end items-center rotate-180 w-full">
					<Quote />
				</div>
				<p>Until one has loved an animal, a part of one's soul remains unawakened.</p>
			</blockquote>
			<figcaption
				class="text-lg text-pink-900 text-center italic font-medium mt-2"
				aria-label="quote attribution"
			>
				― Anatole France
			</figcaption>
		</figure>
	</div>
</section>
