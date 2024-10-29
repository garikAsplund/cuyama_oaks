<script lang="ts">
    const activities: { title: string, description: string, background: string, link: string }[] = [
        {
            title: "Hiking",
            description: "Explore the ranch on foot with our hiking trails.",
			background: "url('hiking.jpg')",
            link: "https://www.alltrails.com/us/california/new-cuyama",
        },
    ];
</script>

<section class=" h-screen p-8 bg-blue-300 flex flex-col z-5 max-w-full" id="ThingsToDo">
    <h2 class="sticky top-0 pt-12 md:pt-24 font-bona text-8xl flex justify-center w-full bg-blue-300">Explore</h2>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 w-auto mx-auto">
        {#each activities as activity}
            <div class="bg-black/10 p-8 ">
                <h2 class="text-4xl font-bold">{activity.title}</h2>
                <p>{activity.description}</p>
            </div>
        {/each}
    </div> -->
</section>