<!-- GlampingSection.svelte -->
<script lang="ts">
	import { amenities } from '$lib/amenities';
</script>

<section
	class="h-auto relative bg-teal-300 max-w-full w-full p-8 z-20 flex flex-col items-center"
	id="Glamping"
>
	<div class="max-w-7xl">
		<div class="sticky top-0 md:p-8 lg:pl-32 flex justify-between z-30 w-full bg-teal-300">
			<div class="w-full pt-12 md:pl-16 hidden md:block">
				<h1 class="text-8xl">Glamping</h1>
			</div>
			<div
				class="sticky top-0 flex justify-center items-center z-40 w-full bg-teal-300 h-36 md:hidden"
			>
				<h1 class="text-6xl mt-8 opacity-90">Glamping</h1>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-16">
			<!-- Left side: Images -->

			<div class="flex flex-col justify-center h-full gap-4">
				<enhanced:img
					src="/static/glamping-inside.jpeg"
					alt="Glamping view 3"
					class="w-full h-80 object-cover object-center rounded-md"
				/>
				<div class="grid grid-cols-2 gap-4">
					<enhanced:img
						src="/static/glamping-outside.jpeg"
						alt="Glamping view 2"
						class="w-full h-80 object-cover object-left rounded-md"
					/>
					<enhanced:img
						src="/static/glamping-night.jpeg"
						alt="Glamping view 1"
						class="w-full h-80 object-cover object-bottom rounded-md"
					/>
				</div>
				<enhanced:img
					src="/static/glamping-bed.png"
					alt="Glamping view 3"
					class=" w-full h-96 object-cover object-top rounded-md"
				/>
			</div>

			<!-- Right side: Amenities -->
			<div class="flex md:justify-start md:pl-32 justify-center">
				<div class="flex flex-col items-start space-y-8 my-12">
					{#each amenities as amenity}
						<div class="space-y-4 text-left">
							<h2 class="text-2xl font-bold">{amenity.title}</h2>
							<ul class="list-disc pl-4 space-y-2">
								{#each amenity.items as item}
									<li class="text-lg pl-4 list-none">{item}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
