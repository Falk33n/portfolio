<script lang="ts">
	import type { TypographyProps } from '$lib/components/typography';
	import { cn } from '$lib/utils';

	let { children, class: className }: TypographyProps = $props();
</script>

<h2
	class={cn(
		'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
		className,
	)}
>
	{@render children()}
</h2>
