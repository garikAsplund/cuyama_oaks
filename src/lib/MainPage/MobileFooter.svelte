<script lang="ts">
  import Instagram from '$lib/Instagram.svelte';
  import PhoneButton from '$lib/PhoneButton.svelte';
  import PinButton from '$lib/PinButton.svelte';

  let { scrollY } = $props();
</script>

<footer 
  class="md:hidden w-full fixed bottom-0 flex justify-between items-center z-50 {scrollY > 40 ? 'backdrop-blur-xl backdrop-invert' : ''}"
  style:filter={scrollY > 40 ? 'invert(1)' : ''}
  >
  <PhoneButton />
  <PinButton />
  <Instagram />
</footer>