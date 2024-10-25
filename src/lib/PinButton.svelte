<script lang="ts">
	import MapSvg from './MapSVG.svelte';
	import { onMount } from 'svelte';

	let directionsLink = '';

	function detectDevice() {
		const userAgent = navigator.userAgent;

		if (/iPad|iPhone|iPod/.test(userAgent)) {
			directionsLink = 'https://maps.apple.com/?ll=34.948958,-119.807372&q=Dropped%20Pin&t=m';
		} else {
			directionsLink = 'https://www.google.com/maps/dir/?api=1&destination=Cuyama+Oaks+Ranch';
		}
	}

	onMount(() => {
		detectDevice();
	});
</script>

<a
	href={directionsLink}
	target="_blank"
	rel="noopener"
	aria-label="Get directions to our location"
	class="p-4 hover:opacity-65 opacity-85"
>
	<MapSvg />
</a>
