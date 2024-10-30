<script lang="ts">
	import alisopark from '/static/aliso-park.png?enhanced';
	import carrizoplain from '/static/carrizo-plain.png?enhanced';
	import ballingercanyon from '/static/ballinger-canyon.png?enhanced';

	const activities: {
		title: string;
		link: string;
		image: string;
	}[] = [
		{
			title: 'Hike the Carrizo Plain',
			link: 'https://static1.squarespace.com/static/5a297d3dfe54eff9efa967c0/t/63d1ab804e271803bb6ce996/1674685322135/CB-carrizo-plain-brochure_compressed.pdf',
			image: carrizoplain
		},
		{
			title: 'Offroad in Ballinger Canyon',
			link: 'https://static1.squarespace.com/static/5a297d3dfe54eff9efa967c0/t/63d1ab62b4606865f677b2c7/1674685292099/CB-ballinger-canyon-brochure_compressed.pdf',
			image: ballingercanyon
		},
		{
			title: 'Explore Aliso Park',
			link: 'https://static1.squarespace.com/static/5a297d3dfe54eff9efa967c0/t/63d1ab3291c6832ef9eb3f00/1674685252487/CB-aliso-park-brochure_compressed.pdf',
			image: alisopark
		}
	];
</script>

<section class="min-h-screen relative h-auto bg-blue-300 p-8 z-30" id="Explore">
	<h2 class="sticky top-0 pt-12 md:pt-24 font-bona md:text-8xl text-6xl text-center w-full bg-blue-300 z-30">
		Explore
	</h2>
	<div class="container flex flex-col items-center mx-auto mt-24">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:w-5/6 lg:w-2/3 w-2/3">
			{#each activities as activity}
				<div class=" p-8">
					<a
						href={activity.link}
						target="_blank"
						rel="noopenner noreferrer"
						class="hover:opacity-75"
                        aria-label={activity.title}
					>
						<enhanced:img
							src={activity.image}
							alt={activity.title}
							class="w-full h-full object-cover"
						/>
					</a>
				</div>
			{/each}
		</div>
		<div class="flex flex-col justify-center items-center my-24 space-y-24">
			<a
				href="https://www.visitcuyama.com/directory"
				target="_blank"
				rel="noopenner noreferrer"
				class="text-3xl font-bold text-center text-opacity-80 hover:opacity-75 p-2"
                aria-label="Visit Cuyama Directory"
				><enhanced:img src="/static/visit-cuyama.png" alt="Visit Cuyama town directory" class="invert cent md:h-24 h-16 w-auto" /> <p class="md:mt-8 mt-4 md:text-3xl text-lg">TOWN DIRECTORY</p>
                </a
			>
			<a
				href="https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F2940554&s=67&unique_share_id=8aacc671-d50a-4cb4-93e1-8f53d40a6145"
				target="_blank"
				rel="noopenner noreferrer"
				class="text-3xl font-bold text-center text-opacity-80 hover:opacity-75 p-2"
			>
				Check out our guidebook!
			</a>
		</div>
	</div>
</section>
