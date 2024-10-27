<script lang="ts">
	let { title, items, offset, index, scrollY } = $props();
</script>

<div class="min-h-[100px]">
	<div class=" w-full bg-gradient-to-r from-white ">
		<div class="p-8">
			<h2 class="text-xl font-semibold mb-2">{title}</h2>
			<ul class="list-disc pl-5 space-y-1">
				{#each items as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
