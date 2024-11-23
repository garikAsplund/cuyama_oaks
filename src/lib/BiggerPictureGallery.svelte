<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import BiggerPicture from 'bigger-picture';
  import 'bigger-picture/css';
  import { browser } from '$app/environment';

  export let maxZoom = 3;
  export let scale = 0.95;
  export let intro = 'fadeup';
  export let thumbnailWidth = '300px';
  export let gap = '8px';

  let galleryData: any[] = [];
  let bp: any;
  let galleryElement: HTMLElement;
  let masonry: any;

  onMount(async () => {
    const { default: importedGalleryData } = await import('$lib/gallery.json');
    galleryData = importedGalleryData;

    if (browser) {
      const Masonry = (await import('masonry-layout')).default;
      
      bp = BiggerPicture({
        target: document.body
      });

      setTimeout(() => {
        masonry = new Masonry(galleryElement, {
          itemSelector: '.gallery-item',
          columnWidth: '.gallery-item',
          gutter: parseInt(gap),
          fitWidth: true, // This helps with centering
          percentPosition: true,
          transitionDuration: 0
        });

        const images = galleryElement.getElementsByTagName('img');
        Array.from(images).forEach(img => {
          img.onload = () => masonry?.layout();
        });
      }, 100);
    }

    return () => {
      bp?.destroy();
      masonry?.destroy();
    };
  });

  function openGallery(index: number) {
    const items = galleryData.map(img => ({
      img: img.full,
      thumb: img.thumb,
      alt: img.alt || '',
      width: img.width,
      height: img.height,
    }));

    bp?.open({
      items,
      intro,
      position: index,
      maxZoom,
      scale,
      thumbnails: true,
    });
  }

  function getAspectRatioPadding(width: number, height: number): string {
    return `${(height / width) * 100}%`;
  }
</script>

<div class="gallery-container">
  <div 
    class="gallery-grid" 
    bind:this={galleryElement}
    style="--thumbnail-width: {thumbnailWidth}; --gap: {gap}"
  >
    {#each galleryData as image, i}
      <div 
        class="gallery-item"
        on:click={() => openGallery(i)}
        on:keydown={(e) => e.key === 'Enter' && openGallery(i)}
        role="button"
        tabindex="0"
      >
        <div 
          class="aspect-ratio-box"
          style="padding-bottom: {getAspectRatioPadding(image.width, image.height)}"
        >
          <img
            src={image.thumb}
            alt={image.alt || ''}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .gallery-container {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
  }

  .gallery-grid {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    justify-content: center;
  }

  .gallery-item {
    width: var(--thumbnail-width);
    margin-bottom: var(--gap);
    cursor: pointer;
    background: #191919;
    border-radius: 8px;
    overflow: hidden;
  }

  .aspect-ratio-box {
    position: relative;
    width: 100%;
    height: 0;
  }

  .aspect-ratio-box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  /* If native masonry is supported */
  @supports (grid-template-rows: masonry) {
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--thumbnail-width), 1fr));
      gap: var(--gap);
      grid-template-rows: masonry;
      max-width: 1400px; /* or whatever max-width you prefer */
      margin: 0 auto;
    }

    .gallery-item {
      width: 100%;
      margin-bottom: 0;
    }
  }
</style>