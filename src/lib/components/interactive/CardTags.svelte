<script lang="ts">
	import { Badge } from '$components/decorative';

	type Props = {
		tags?: string[];
	};

	let { tags }: Props = $props();
</script>

{#if tags}
	<div class="mt-3.5 flex flex-wrap gap-1">
		{#each tags as tag}
			<Badge class="py-1">{tag}</Badge>
		{/each}
	</div>
{/if}
