<script lang="ts">
    let { scrollY } = $props();
</script>

<section class="scroll-mt-24" id="About">
    <div class="overflow-hidden">
        <section class="relative w-full flex justify-center h-[66vh]">
            <div
                class="md:absolute top-20 right-[5%] w-1/2 h-full z-0 hidden md:block"
                style="background: linear-gradient(45deg, rgba(255, 0, 0, 0.13), rgba(255, 154, 0, 0.13), rgba(255, 255, 0, 0.13), rgba(0, 255, 0, 0.13), rgba(0, 0, 255, 0.13), rgba(75, 0, 130, 0.13), rgba(143, 0, 255, 0.13));"
            ></div>

            <enhanced:img
                src="/static/nate+ricky.jpeg"
                id="gay-boys"
                alt="Your hosts Nate and Ricky"
                class="object-contain absolute top-20 right-[5%] w-1/2 -z-10"
                style="transform: translateY(calc({scrollY} * 0.02px));"
            />

            <div
                class="relative -z-10 w-full bg-white/75 h-[105vh] flex flex-col justify-center items-start p-8 pl-8 md:pl-16 lg:pl-32 xl:pl-48 mx-auto space-y-4 "
                style="transform: translateY(calc({scrollY} * -0.21px));"
            >
                <h1 class="text-2xl md:text-4xl lg:text-7xl font-bold mb-4 w-full">Your hosts</h1>
                <p class="w-5/6 pl-4 md:pl-8 text-xl">
                    We met in Ventura and love seeking new adventures.
                </p>
                <p class="w-5/6 pl-4 md:pl-8 text-xl">
                    The pandemic gave us a chance to create a special LGBTQIA getaway when options were
                    limited.
                </p>
                <p class="w-5/6 pl-4 md:pl-8 text-xl">
                    Since then, we've grown a welcoming family environment where you can <b
                        >relax and have fun</b
                    >.
                </p>
            </div>
        </section>
    </div>
</section>