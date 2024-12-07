<script lang="ts">
	import type { TypographyProps } from '$lib/components/typography';
	import { cn } from '$lib/utils';

	let { children, class: className }: TypographyProps = $props();
</script>

<p class={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
	{@render children()}
</p>
