<section class="z-30 bg-white relative" id="photos">
	<div class="flex w-full justify-center md:py-32 px-8">
		<div class="grid md:grid-cols-3 grid-cols-1 items-center gap-8 max-w-7xl">
			<enhanced:img
				src="/static/reel/reel1.webp"
				alt="Hike at the base of the mountains"
				loading="lazy"
				sizes="(min-width: 1024px) 800px, min(100vw - 2rem, 600px)"
				class="w-full h-96 object-cover object-top rounded-md aspect-square brightness-125"
			/>
			<enhanced:img
				src="/static/reel/flowers.webp"
				alt="See a superbloom"
				loading="lazy"
				sizes="(min-width: 1024px) 800px, min(100vw - 2rem, 600px)"
				class="w-full h-96 object-cover object-top rounded-md aspect-square"
			/>
			<enhanced:img
				src="/static/reel/trail.jpeg"
				alt="Dogs welcome!"
				loading="lazy"
				sizes="(min-width: 1024px) 800px, min(100vw - 2rem, 600px)"
				class="w-full h-96 object-cover rounded-md aspect-square"
			/>
			<div class="w-full flex justify-center items-start md:hidden h-16">
				<a
					href="/gallery"
					aria-label="Photos"
					class="hover:opacity-75 underline underline-offset-4 text-center p-2">View more photos</a
				>
			</div>
		</div>
	</div>
</section>
