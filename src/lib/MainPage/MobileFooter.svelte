<script lang="ts">
  import Instagram from '$lib/Instagram.svelte';
  import PhoneButton from '$lib/PhoneButton.svelte';
  import PinButton from '$lib/PinButton.svelte';
  let { scrollY } = $props();
</script>

<footer 
  class="md:hidden w-full fixed bottom-0 flex justify-between items-center z-50 transition-colors duration-300 "
  style:filter={scrollY > 15 ? 'invert(1)' : ''}
  >
  <PhoneButton />
  <PinButton />
  <Instagram />
</footer>