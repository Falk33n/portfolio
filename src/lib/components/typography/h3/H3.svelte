<script lang="ts">
	import type { TypographyProps } from '$lib/components/typography';
	import { cn } from '$lib/utils';

	let { children, class: className }: TypographyProps = $props();
</script>

<h3 class={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
	{@render children()}
</h3>
