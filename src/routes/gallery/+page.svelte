<script>
	import BiggerPictureGallery from '$lib/BiggerPictureGallery.svelte';
	import Nav from '$lib/MainPage/Nav.svelte';

	const galleryImages = [
		{
			id: 'tent1',
			thumb: '/gallery/flower.webp',
			full: '/gallery/flower.webp',
			alt: 'Luxury glamping tent interior',
			caption: 'If you want captions, great'
		},
		{
			id: 'tent2',
			thumb: '/gallery/main-grid1.webp',
			full: '/gallery/main-grid1.webp',
			alt: 'If you do not want captions, great',
			caption: 'Deluxe tent with mountain view'
		},
		{
			id: 'tent3',
			thumb: '/gallery/main-grid2.webp',
			full: '/gallery/main-grid2.webp',
			alt: 'Luxury glamping tent interior'
		},
		{
			id: 'tent3',
			thumb: '/gallery/main-grid3.webp',
			full: '/gallery/main-grid3.webp',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/1.jpeg',
			full: '/gallery/1.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/2.jpeg',
			full: '/gallery/2.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/3.jpeg',
			full: '/gallery/3.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/4.jpeg',
			full: '/gallery/4.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/5.jpeg',
			full: '/gallery/5.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/6.jpeg',
			full: '/gallery/6.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/7.jpeg',
			full: '/gallery/7.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/8.jpeg',
			full: '/gallery/8.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/9.jpeg',
			full: '/gallery/9.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		},
		{
			id: 'tent3',
			thumb: '/gallery/10.jpeg',
			full: '/gallery/10.jpeg',
			alt: 'Luxury glamping tent interior',
			caption: ':)'
		}
	];

	let scrollY = 0;
	const isVisible = true;
</script>

<div class="min-h-screen w-full bg-black flex flex-col items-center px-4 py-8">
	<Nav {scrollY} {isVisible} />
	<BiggerPictureGallery maxZoom={3} scale={0.95} intro="fadeup" />
</div>
