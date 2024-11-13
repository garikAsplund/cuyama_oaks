<script lang="ts">
	let { scrollY } = $props();
</script>

<section class=" z-30 bg-white relative" id="About">
	<div class="overflow-hidden">
		<section class="relative w-full flex justify-center z-30 md:h-[77vh] h-screen">
			<div
				class="md:absolute top-20 right-[5%] w-1/2 h-full z-30 hidden md:block"
				style="background: linear-gradient(45deg, rgba(255, 0, 0, 0.13), rgba(255, 154, 0, 0.13), rgba(255, 255, 0, 0.13), rgba(0, 255, 0, 0.13), rgba(0, 0, 255, 0.13), rgba(75, 0, 130, 0.13), rgba(143, 0, 255, 0.13)); transform: translateY(calc({scrollY} * 0.12px));"
			></div>

			<enhanced:img
				src="/static/nate+ricky.jpeg"
				id="gay-boys"
				alt="Your hosts Nate and Ricky"
				class="object-contain absolute top-20 right-[5%] w-1/2 z-20"
				style="transform: translateY(calc({scrollY} * 0.12px));"
			/>

			<div
				class="relative z-20 w-full bg-white/75 h-[105vh] pt-64 md:pt-0 flex flex-col justify-center items-start p-8 pl-8 md:pl-16 lg:pl-32 xl:pl-48 mx-auto space-y-4"
				style="transform: translateY(calc({scrollY} * -0.16px));"
			>
				<div class="max-w-4xl space-y-4">
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
						Cuyama Oaks Ranch is an 82-acre property nestled at the base of the Sierra Madre
						Mountains.
					</p>
					<p class="w-5/6 pl-4 md:pl-8 text-xl">
						Offering 360-degree views and close to <b>hiking, wine country, and the beach</b>, it provides
						a private, secluded high desert getaway just off Route 166.
					</p>
				</div>
			</div>
		</section>
	</div>
</section>
