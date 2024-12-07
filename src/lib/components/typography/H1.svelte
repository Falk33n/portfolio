<script lang="ts">
	import type { TypographyProps } from '$components/typography';
	import { cn } from '$utils';

	let { children, class: className, ...props }: TypographyProps = $props();
</script>

<h1
	class={cn(
		'scroll-m-20 text-5xl font-extrabold tracking-tight md:text-6xl',
		className,
	)}
	{...props}
>
	{@render children()}
</h1>
