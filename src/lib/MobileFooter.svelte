<script lang="ts">
	import Instagram from '$lib/Instagram.svelte';
	import PhoneButton from '$lib/PhoneButton.svelte';
	import PinButton from '$lib/PinButton.svelte';
</script>

<footer class="md:hidden w-full fixed bottom-0 flex justify-between items-center">
	<PhoneButton />
	<PinButton />
	<Instagram />
</footer>
