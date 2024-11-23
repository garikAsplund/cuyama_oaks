<script lang="ts">
	import AirbnbSVG from '$lib/SVGs/AirbnbSVG.svelte';
	import HipcampSVG from '$lib/SVGs/HipcampSVG.svelte';
	import GoogleSVG from '$lib/SVGs/GoogleSVG.svelte';

	const reviews = [
		{
			name: 'Google',
			link: 'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zLKoMDfJq8oxYLRSNaiwMEhNSrVMMUtOMTcyNTc1tDKoMDMwMDe1NEyxNDY0Tksys_ASTC6tTMxNVMhPzC5WKErMS84AAO55FUY&q=cuyama+oaks+ranch&oq=cuyama+oaks+ranch&sourceid=chrome&ie=UTF-8#lrd=0x80ebe9d6cd725751:0x6007591d9313fb68,1,,,,',
			svg: GoogleSVG,
			number: '31 reviews',
			rating: '4.8'
		},
		{
			name: 'Hipcamp',
			link: 'https://www.hipcamp.com/en-US/land/california-cuyama-oaks-ranch-ex9hp87z/reviews',
			svg: HipcampSVG,
			number: '728 ratings',
			rating: '99%'
		},
		{
			name: 'Airbnb',
			link: 'https://www.airbnb.com/users/show/37274212',
			svg: AirbnbSVG,
			number: '394 reviews',
			rating: '4.93'
		}
	];
</script>

<div class="w-full flex justify-center items-center text-white fill-white opacity-80">
	<div class="md:w-2/3 w-full flex justify-between items-center md:scale-100 scale-75">
		{#each reviews as review}
			<a
				href={review.link}
				aria-label="See our {review.name} Reviews"
				rel="noopener noreferrer"
				target="_blank"
				class="hover:opacity-75"
			>
				<div class="flex flex-col items-center justify-center space-y-1">
					<div class="w-12 h-12 flex items-center justify-center">
						<svelte:component this={review.svg} />
					</div>
					<div class="flex items-center space-x-2" aria-hidden="true">
						<p>{review.rating}</p>
						{#if review.name === 'Hipcamp'}
							<svg
								class="text-white w-4 h-4"
								stroke="currentColor"
								fill="white"
								stroke-width="0"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"
								/>
							</svg>
						{:else}
							<svg
								class="w-4 h-4 text-white"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
							>
								<path
									d="M7.57 1.1 5.51 5.24l-4.57.65a.5.5 0 0 0-.29.14l-.06.1c-.1.2-.11.27-.03.44l.1.18 3.3 3.23-.8 4.55a.5.5 0 0 0 .05.32l.07.08c.16.17.22.2.41.17l.2-.04 4.1-2.13 4.08 2.16c.1.06.21.07.33.05l.08-.04c.21-.1.26-.15.3-.34l.02-.2-.77-4.55 3.32-3.22a.5.5 0 0 0 .15-.3l-.01-.1c-.05-.3-.08-.3-.42-.46l-4.57-.68L8.47 1.1a.5.5 0 0 0-.9 0z"
								/>
							</svg>
						{/if}
					</div>
					<span>{review.number}</span>
				</div>
			</a>
		{/each}
	</div>
</div>
