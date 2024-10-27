<script lang="ts">
	import Instagram from './Instagram.svelte';
	import WeatherWidget from './WeatherWidget.svelte';
</script>

<nav class="fixed top-0 w-full md:flex justify-between items-center hidden backdrop-blur-md z-40">
	<div class="mx-8 space-x-4 text-white opacity-80">
		<a href="#About" class="p-2 hover:opacity-75">About</a>
		<a href="#Glamping" class="p-2 hover:opacity-75">Glamping</a>
		<a href="#Camping" class="p-2 hover:opacity-75">Camping</a>
		<a href="#ThingsToDo" class="p-2 hover:opacity-75">Things To Do</a>
	</div>
	<div class="flex justify-between">
		<WeatherWidget />
		<Instagram />
	</div>
</nav>
