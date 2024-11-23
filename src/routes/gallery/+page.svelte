<script>
	import BiggerPictureGallery from '$lib/BiggerPictureGallery.svelte';
	import Nav from '$lib/MainPage/Nav.svelte';

	let scrollY = 0;
	const isVisible = true;
</script>

<div class="min-h-screen w-full bg-black flex flex-col items-center px-4 py-8">
	<Nav {scrollY} {isVisible} />
	<BiggerPictureGallery maxZoom={3} scale={0.95} intro="fadeup" />
</div>
