<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import BiggerPicture from 'bigger-picture';
  import 'bigger-picture/css';
  import { browser } from '$app/environment';

  export let thumbnailWidth = 'min(300px, 100%)';
  export let gap = '16px';
  export let maxZoom = 3;
  export let scale = 0.95;
  export let intro = 'fadeup';

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

      // Initialize masonry after images are loaded
      const initMasonry = () => {
        if (masonry) masonry.destroy();
        
        masonry = new Masonry(galleryElement, {
          itemSelector: '.gallery-item',
          columnWidth: '.gallery-sizer',
          gutter: parseInt(gap),
          fitWidth: true,
          percentPosition: false,
          transitionDuration: 0,
        });
      };

      // Wait for images to load before initializing masonry
      const images = galleryElement.getElementsByTagName('img');
      let loadedImages = 0;
      const totalImages = images.length;

      function onImageLoad() {
        loadedImages++;
        if (loadedImages === totalImages) {
          initMasonry();
        }
      }

      Array.from(images).forEach(img => {
        if (img.complete) {
          onImageLoad();
        } else {
          img.onload = onImageLoad;
        }
      });

      // Initialize masonry anyway after a timeout in case some images fail to load
      setTimeout(initMasonry, 1000);

      // Re-layout masonry on window resize
      window.addEventListener('resize', () => {
        if (masonry) masonry.layout();
      });
    }

    return () => {
      bp?.destroy();
      if (masonry) masonry.destroy();
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
</script>

<div class="gallery-container">
  <div 
    class="gallery-grid" 
    bind:this={galleryElement}
    style="--thumbnail-width: {thumbnailWidth}; --gap: {gap}"
  >
    <!-- Element for masonry sizing -->
    <div class="gallery-sizer"></div>
    
    {#each galleryData as image, i}
      <div 
        class="gallery-item"
        on:click={() => openGallery(i)}
        on:keydown={(e) => e.key === 'Enter' && openGallery(i)}
        role="button"
        tabindex="0"
        style="--aspect-ratio: {(image.height / image.width * 100)}%"
      >
        <div class="image-container">
          <img
            src={image.thumb}
            alt={image.alt || ''}
            loading="lazy"
            decoding="async"
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .gallery-container {
    width: 100%;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    padding: var(--gap);
  }

  .gallery-grid {
    width: 100%;
    max-width: 1400px;
  }

  /* Element for masonry sizing */
  .gallery-sizer {
    width: var(--thumbnail-width);
  }

  .gallery-item {
    width: var(--thumbnail-width);
    max-width: calc(100% - var(--gap));
    background: #191919;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    margin-bottom: var(--gap);
  }

  .gallery-item::before {
    content: "";
    display: block;
    padding-bottom: var(--aspect-ratio);
  }

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #191919;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    display: block;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  /* Mobile adjustments */
  @media (max-width: 639px) {
    .gallery-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .gallery-sizer {
      display: none;
    }

    .gallery-item {
      width: 100%;
    }
  }
</style>