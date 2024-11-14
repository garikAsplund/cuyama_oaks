<script lang="ts">
	import { campsites } from '$lib/campsites';
</script>

<section
	class="relative h-auto p-8 bg-yellow-300 flex flex-col items-center z-5 max-w-full z-20"
	id="Camping"
>
	<div class="max-w-7xl">
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
				<enhanced:img
					src="/static/camp8.webp"
					alt="Campsite overview"
					class="w-full h-48 object-cover object-center rounded-md"
				/>
				<div class="grid grid-cols-2 gap-4">
					<enhanced:img
						src="/static/camp5.webp"
						alt="Camp as homebase"
						class="w-full h-96 object-cover object-top rounded-md"
					/>
					<enhanced:img
						src="/static/camp7.webp"
						alt="Camp at the base of the mountains"
						class="w-full h-96 object-cover object-right rounded-md"
					/>
				</div>

				<enhanced:img
					src="/static/poop-review.png"
					alt="Poop review"
					class="w-full h-auto object-contain object-top rounded-md"
				/>
			</div>

			<!-- Description Section -->
			<div class="flex flex-col items-start space-y-16 order-2 md:order-1 my-12 md:my-24">
				{#each campsites as amenity}
					<div>
						<h2 class="text-2xl font-bold">{amenity.name}</h2>
						<div class="pl-4">
							<h3 class="text-lg font-semibold pt-4">{amenity.tag}</h3>
							<p class="text-lg list-none pt-2">{amenity.description}</p>
							<div class="flex w-full justify-center">
								<a
									href={amenity.link}
									target="_blank"
									rel="noopener noreferrer"
									class="text-lg p-2 border-2 mt-8 border-black hover:opacity-75"
									aria-label="Book {amenity.name} now!"
								>
									Book {amenity.name}</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
