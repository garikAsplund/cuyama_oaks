<script lang="ts">
	import { campsites } from '$lib/campsites';
</script>

<section class="relative h-auto p-8 bg-yellow-300 flex flex-col items-center z-5 max-w-full z-20" id="Camping">
	<div class="max-w-7xl ">
		<div class="sticky top-0 w-full bg-yellow-300">
			<h2
				class="w-[80%] font-bona text-6xl md:text-8xl bg-inherit md:pt-20 lg:text-end text-center hidden md:block"
			>
				Camping
			</h2>
		</div>
		<div
			class="sticky top-0 flex font-bona justify-center items-center z-40 w-full bg-yellow-300 h-36 md:hidden"
		>
			<h1 class="text-6xl md:text-8xl opacity-90">Camping</h1>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mx-auto xl:w-4/5 md:my-24">
			<!-- Image Section -->
			<div class="flex flex-col justify-center h-full gap-4 order-1 md:order-2">
				<div class="grid grid-cols-2 gap-4">
					<enhanced:img
						src="/static/camp3.webp"
						alt="Glamping view 1"
						class="w-full h-64 object-cover rounded-md"
					/>
					<enhanced:img
						src="/static/COR-social-card.jpeg"
						alt="Glamping view 2"
						class="w-full h-64 object-cover rounded-md"
					/>
				</div>
				<enhanced:img
					src="/static/camp4.webp"
					alt="Glamping view 3"
					class="w-full h-96 object-cover object-top rounded-md"
				/>
				<enhanced:img
					src="/static/poop-review.png"
					alt="Glamping view 3"
					class="w-full h-auto object-contain object-top rounded-md"
				/>
			</div>

			<!-- Description Section -->
			<div class="flex flex-col items-start space-y-8 order-2 md:order-1 my-12 md:my-24">
				{#each campsites as amenity}
					<div class="space-y-4">
						<h2 class="text-2xl font-bold">{amenity.name}</h2>
						<p class="text-lg pl-4 list-none">{amenity.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
