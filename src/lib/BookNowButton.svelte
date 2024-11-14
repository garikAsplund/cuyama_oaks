<script lang="ts">
	import CalendarSvg from '$lib/SVGs/CalendarSVG.svelte';
</script>

<a
	href="https://www.hipcamp.com/en-US/land/california-cuyama-oaks-ranch-ex9hp87z?adults=1&children=0&srid=5fd3d2e1-ab6c-41b1-89c9-40b2c4fc530a"
	target="_blank"
	rel="noopener"
	class="md:mt-24 mt-8 inline-flex items-center space-x-3 text-xl text-white px-4 py-2 rounded-lg border-2 animate-border-gradient backdrop-blur-sm bg-transparent"
	>
	<div class="flex hover:opacity-75 items-center space-x-3">
		<CalendarSvg />
		<p>Book Now</p>
	</div>
</a>

<style>
	.animate-border-gradient {
		border-image: linear-gradient(45deg, #ff4500, #ffaa00) 1; /* Starting gradient */
		border-style: solid;
		background: transparent;
	}

	@keyframes gradient-rotate-rainbow {
		0%, 100% {
			border-image-source: linear-gradient(45deg, #ff4500, #ffaa00); /* Start and end with red-orange */
		}
		20% {
			border-image-source: linear-gradient(45deg, #ffaa00, #40ff00); /* Transition to orange-green */
		}
		40% {
			border-image-source: linear-gradient(45deg, #40ff00, #40aaff); /* Transition to green-blue */
		}
		60% {
			border-image-source: linear-gradient(45deg, #40aaff, #ff40aa); /* Transition to blue-pink */
		}
		80% {
			border-image-source: linear-gradient(45deg, #ff40aa, #ff4500); /* Transition to pink-red */
		}
	}

	.animate-border-gradient {
		animation: gradient-rotate-rainbow 12s linear infinite;
	}
</style>
