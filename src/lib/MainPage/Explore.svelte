<script lang="ts">
  import { activities } from '$lib/explore';  
</script>

<section class="min-h-screen bg-blue-300 p-8 z-20" id="ThingsToDo">
    <h2 class="sticky top-0 pt-12 md:pt-24 font-bona text-8xl text-center w-full bg-blue-300 z-10">
        Explore
    </h2>
    <div class="container mx-auto mt-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- {#key activities}
                {#each activities as activity}
                    <div class="bg-black/10 p-8 aspect-square">
                        <enhanced:img 
                            src={activity.image} 
                            alt={activity.title} 
                            class="w-full h-full object-cover"
                        />
                    </div>
                {/each}
            {/key} -->
        </div>
    </div>
</section>