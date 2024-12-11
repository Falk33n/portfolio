<script lang="ts">
	import { cn } from '$utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes & {
		isCurrentSection?: boolean;
	};

	let { children, isCurrentSection = false, ...props }: Props = $props();
</script>

<a
	class={cn(
		'group -ml-1 flex max-w-max items-center gap-4 rounded-md p-1 text-foreground/65 transition-all hover:text-foreground focus-visible:text-foreground',
		isCurrentSection && 'text-foreground',
	)}
	{...props}
>
	<span
		class={cn(
			'h-px w-14 bg-foreground/60 transition-all group-hover:w-20 group-hover:bg-foreground group-focus-visible:w-20 group-focus-visible:bg-foreground',
			isCurrentSection && 'w-20 bg-foreground',
		)}
	></span>
	<span class="text-sm font-bold uppercase tracking-widest">
		{@render children?.()}
	</span>
</a>
