<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import BiggerPicture from 'bigger-picture';
  import 'bigger-picture/css';
  import { browser } from '$app/environment';

  export let thumbnailWidth = 'min(300px, 100%)';
  export let gap = '8px';
  export let maxZoom = 3;
  export let scale = 0.95;
  export let intro = 'fadeup';

  let galleryData: any[] = [];
  let bp: any;
  let galleryElement: HTMLElement;
  let masonry: any;

  // Preload an image
  function preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }

  onMount(async () => {
    const { default: importedGalleryData } = await import('$lib/gallery.json');
    galleryData = importedGalleryData;

    if (browser) {
      const Masonry = (await import('masonry-layout')).default;
      
      bp = BiggerPicture({
        target: document.body,
        preload: true  // Enable preloading
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
          initLayout: false  // Don't layout immediately
        });

        // Force layout after a brief delay
        setTimeout(() => {
          masonry.layout();
        }, 100);
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

      // Re-layout masonry on window resize with debounce
      let resizeTimer: any;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (masonry) masonry.layout();
        }, 100);
      });
    }

    return () => {
      bp?.destroy();
      if (masonry) masonry.destroy();
    };
  });

  async function openGallery(index: number) {
    const items = galleryData.map(img => ({
      img: img.full,
      thumb: img.thumb,
      alt: img.alt || '',
      width: img.width,
      height: img.height,
    }));

    // Preload the clicked image and adjacent images
    try {
      await Promise.all([
        preloadImage(items[index].img),
        index > 0 && preloadImage(items[index - 1].img),
        index < items.length - 1 && preloadImage(items[index + 1].img)
      ]);
    } catch (e) {
      console.warn('Failed to preload some images');
    }

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

<div class="gallery-container mt-16">
  <div 
    class="gallery-grid" 
    bind:this={galleryElement}
    style="--thumbnail-width: {thumbnailWidth}; --gap: {gap}"
  >
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
    max-width: 80vw;
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