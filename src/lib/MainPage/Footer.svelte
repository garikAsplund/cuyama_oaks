<script lang="ts">
	let { scrollY } = $props();

	const colorValue = $derived(Math.round(255 - scrollY * 2));
</script>

<footer
	class="fixed bottom-0 w-full md:flex flex-col justify-center items-center text-white opacity-70  hidden z-0 space-y-4 mb-8"
	style=" color: rgb({colorValue}, {colorValue}, {colorValue});"
>
	<div class="flex text-center p-4 space-x-4">
		<p>cuyamaoaksranch@gmail.com</p>
		<span>|</span>
		<p>(740) 258-8561</p>
		<span>|</span>
		<a href="https://maps.app.goo.gl/y3r2spJiP6Eptrir6" target="_blank" rel="noopener noreferrer" class="hover:opacity-80"
			><p>1900 Wasioja Rd, New Cuyama, CA</p></a
		>
	</div>
</footer>
