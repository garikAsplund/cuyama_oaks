<script>
	import BiggerPictureGallery from '$lib/BiggerPictureGallery.svelte';
	import Nav from '$lib/MainPage/Nav.svelte';

	const galleryImages = [
		{
			id: 'tent1', // Unique ID for keyed each block
			thumb: '/gallery/flower.webp',
			full: '/gallery/flower.webp',
			alt: 'Luxury glamping tent interior',
			// width: 1200,
			// height: 800,
			caption: 'Deluxe tent with mountain view'
		},
		{
			id: 'tent2', // Unique ID for keyed each block
			thumb: '/gallery/main-grid1.webp',
			full: '/gallery/main-grid1.webp',
			alt: 'Luxury glamping tent interior',
			// width: 1200,
			// height: 800,
			caption: 'Deluxe tent with mountain view'
		},
		{
			id: 'tent3', // Unique ID for keyed each block
			thumb: '/gallery/main-grid2.webp',
			full: '/gallery/main-grid2.webp',
			alt: 'Luxury glamping tent interior',
			// width: 1200,
			// height: 800,
			caption: 'Deluxe tent with mountain view'
		}
	];
</script>

<div class="relative z-0 flex flex-col min-h-screen w-full max-w-screen bg-black">
	<BiggerPictureGallery images={galleryImages} maxZoom={3} scale={0.95} intro="fadeup" />
</div>