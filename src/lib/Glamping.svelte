<script lang="ts">
    import { glampsites } from '$lib/glampsites';
    let { scrollY } = $props();
</script>

<section class="h-[100vh] relative bg-teal-300 w-full" id="Glamping">
    <div class="sticky top-0 md:p-16 lg:p-32 md:top-20 flex justify-between z-30 w-full">
        <div class="w-1/3 p-8 lg:p-16 bg-white/70 md:pl-16 hidden md:block">
            <h1 class="text-4xl mb-4">Glamping Sites</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos.</p>
        </div>
        <div class="pt-12 flex justify-center items-center z-40 w-full bg-teal-300 h-36 md:hidden">
            <h1 class="text-6xl md:text-8xl font-bold opacity-90">Glamping</h1>
        </div>
    </div>
    <!-- <div
        class="w-full md:w-2/3 absolute right-0 px-4 lg:pr-8 h-[300vh] flex flex-col justify-start items-end space-y-96"
    >
        {#each glampsites as { name, description, link }}
            <a
                href={link}
                class="mb-4 mt-96 bg-white/70 p-8 rounded-lg shadow-lg w-5/6 md:w-2/3"
                style="transform: translateY(calc({scrollY * -0.1}px))"
            >
                <h2 class="text-4xl font-bold">{name}</h2>
                <p>{description}</p>
            </a>
        {/each}
    </div> -->
</section>