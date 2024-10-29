<script lang="ts">
  let { scrollY } = $props();

  const colorValue = $derived(Math.round(255 - (scrollY * 2)));

</script>

<footer
	class="fixed bottom-0 w-full md:flex justify-center items-center text-white opacity-70 text-center p-4 space-x-4 hidden"
  style=" color: rgb({colorValue}, {colorValue}, {colorValue});"
  >
	<p>cuyamaoaksranch@gmail.com</p>
	<span>|</span>
	<p>(740) 258-8561</p>
	<span>|</span>
	<a href="https://maps.app.goo.gl/y3r2spJiP6Eptrir6" class="hover:opacity-80"
		><p>1900 Wasioja Rd, New Cuyama, CA</p></a
	>
</footer>
