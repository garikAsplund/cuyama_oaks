<script>
	import BiggerPictureGallery from '$lib/BiggerPictureGallery.svelte';
	import Nav from '$lib/MainPage/Nav.svelte';
	
	const galleryImages = [
		{
			id: 'image-1',
			thumb: '/gallery/thumbnails/flower.webp',
			full: '/gallery/flower.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-2',
			thumb: '/gallery/thumbnails/main-grid1.webp',
			full: '/gallery/main-grid1.webp',
			alt: 'Deluxe tent with mountain view'
		},
		{
			id: 'image-3',
			thumb: '/gallery/thumbnails/main-grid2.webp',
			full: '/gallery/main-grid2.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-4',
			thumb: '/gallery/thumbnails/main-grid3.webp',
			full: '/gallery/main-grid3.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-5',
			thumb: '/gallery/thumbnails/1.webp',
			full: '/gallery/1.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-6',
			thumb: '/gallery/thumbnails/2.webp',
			full: '/gallery/2.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-7',
			thumb: '/gallery/thumbnails/3.webp',
			full: '/gallery/3.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-8',
			thumb: '/gallery/thumbnails/4.webp',
			full: '/gallery/4.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-9',
			thumb: '/gallery/thumbnails/5.webp',
			full: '/gallery/5.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-10',
			thumb: '/gallery/thumbnails/6.webp',
			full: '/gallery/6.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-11',
			thumb: '/gallery/thumbnails/7.webp',
			full: '/gallery/7.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-12',
			thumb: '/gallery/thumbnails/8.webp',
			full: '/gallery/8.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-13',
			thumb: '/gallery/thumbnails/9.webp',
			full: '/gallery/9.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'image-14',
			thumb: '/gallery/thumbnails/10.webp',
			full: '/gallery/10.webp',
			alt: 'Luxury glamping tent interior'
		}
	];
	
	let scrollY = 0;
	const isVisible = true;
</script>

<div class="min-h-screen w-full bg-black flex flex-col items-center px-4 py-8">
	<Nav {scrollY} {isVisible} />
	<BiggerPictureGallery maxZoom={3} scale={0.95} intro="fadeup" />
</div>