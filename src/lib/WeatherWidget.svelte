<script lang="ts">
	import { page } from '$app/stores';

	const weatherEmojis = {
		'01d': '☀️', // clear sky day
		'01n': '🌙', // clear sky night
		'02d': '⛅', // few clouds day
		'02n': '☁️', // few clouds night
		'03d': '☁️', // scattered clouds day
		'03n': '☁️', // scattered clouds night
		'04d': '☁️', // broken clouds day
		'04n': '☁️', // broken clouds night
		'09d': '🌧️', // shower rain day
		'09n': '🌧️', // shower rain night
		'10d': '🌦️', // rain day
		'10n': '🌧️', // rain night
		'11d': '⛈️', // thunderstorm day
		'11n': '⛈️', // thunderstorm night
		'13d': '❄️', // snow day
		'13n': '❄️', // snow night
		'50d': '🌁', // misty day
		'50n': '🌁' // misty night
	};
</script>

<a
	href="https://www.google.com/search?q=new+cuyama+weather&sourceid=chrome&ie=UTF-8"
	target="_blank"
	rel="noopener"
	class="hover:opacity-75"
>
	<div class="flex items-center gap-2 p-2">
		{#if $page.data.weather}
			<span class="text-2xl">{weatherEmojis[$page.data.weather.icon]}</span>
			<span class="text-white opacity-80">{$page.data.weather.temp}°</span>
		{/if}
	</div></a
>
