<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    let { title, items, offset, index, scrollY } = $props();

    let isVisible = $state(false);
    let cardElement: HTMLElement;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-100px'
        });

        observer.observe(cardElement);

        return () => observer.disconnect();
    });
</script>

<div class="min-h-[100px]" bind:this={cardElement}>
    <div style="transform: translateY({scrollY * -0.2}px); margin-left: {index * 3}rem;">
        {#if isVisible}
            <div in:fly={{ x: 200, duration: 800, delay: 100 }}
                 class="p-6 bg-gradient-to-r from-white rounded-md">
                <h2 class="text-xl font-semibold mb-2">{title}</h2>
                <ul class="list-disc pl-5 space-y-1">
                    {#each items as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</div>
