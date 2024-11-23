<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import BiggerPicture from 'bigger-picture';
  import 'bigger-picture/css';

  // Props
  export let images = [];
  export let thumbnailHeight = '200px';
  export let gap = '8px';

  let bp;
  let galleryElement;

  onMount(() => {
    bp = BiggerPicture({
      target: document.body
    });

    console.log({images});

    return () => {
      bp?.destroy();
    };
  });

  function openGallery(index) {
    const items = images.map(img => ({
      img: img.full,
      thumb: img.thumb,
      alt: img.alt || '',
      caption: img.caption
    }));

    bp?.open({
      items,
      intro: 'fadeup',
      position: index,
      thumbnails: true
    });
  }
</script>

<div 
  class="gallery-grid" 
  bind:this={galleryElement}
  style="--thumbnail-height: {thumbnailHeight}; --gap: {gap}"
>
  {#each images as image, i}
    <div 
      class="gallery-item"
      on:click={() => openGallery(i)}
      on:keydown={(e) => e.key === 'Enter' && openGallery(i)}
      role="button"
      tabindex="0"
    >
      <img
        src={image.thumb}
        alt={image.alt || ''}
        loading="lazy"
        decoding="async"
      />
      {#if image.caption}
        <div class="caption">{image.caption}</div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
    gap: var(--gap);
    padding: var(--gap);
  }

  .gallery-item {
    position: relative;
    height: var(--thumbnail-height);
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    background: #191919;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    color: white;
    font-size: 0.875rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover .caption {
    opacity: 1;
  }
</style>