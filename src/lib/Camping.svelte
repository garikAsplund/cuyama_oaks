<script lang="ts">
	import { campsites } from './campsites';
</script>

<section
	class="relative h-[150vh] p-8 bg-yellow-300 flex flex-col z-5 max-w-full scroll-mt-12"
	id="Camping"
>
	<h2
		class="sticky top-16 font-bona text-6xl md:text-8xl mt-12 md:mt-48 pr-16 lg:pr-32 lg:text-end text-center w-full hidden md:block"
	>
		Camping
	</h2>
	<div
		class="sticky top-0 flex font-bona justify-center items-center z-40 w-full bg-yellow-300 h-36 md:hidden"
	>
		<h1 class="text-6xl md:text-8xl opacity-90">Camping</h1>
	</div>
	<!-- <div
		class="w-full md:w-2/3 md:pl-32 px-4 lg:pr-8 h-auto flex flex-col justify-start items-start space-y-16 mt-20"
	>
		{#each campsites as { name, description, link }}
			<a href={link} class="mb-4 bg-white p-8 rounded-lg shadow-lg w-5/6 md:w-2/3">
				<h2 class="text-4xl font-bold">{name}</h2>
				<p>{description}</p>
			</a>
		{/each}
	</div> -->
</section>
