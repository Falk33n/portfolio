<script lang="ts">
	import { Badge } from '$components/decorative';

	type Tag = {
		'title': string;
		'href': string;
		'aria-label': string;
	};

	type Props = {
		tags?: Tag[];
	};

	let { tags }: Props = $props();
</script>

{#if tags}
	<div class="mt-3.5 flex flex-wrap gap-1">
		{#each tags as { title, href, "aria-label": ariaLabel }}
			<Badge
				{href}
				aria-label={ariaLabel}
				class="py-1">{title}</Badge
			>
		{/each}
	</div>
{/if}
