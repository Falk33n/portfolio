<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes;

	// Will be used later
	// let isCurrentSection = $state(false);

	let { children, ...props }: Props = $props();
</script>

<a
	class="group -ml-1 flex max-w-max items-center gap-4 rounded-md p-1 text-foreground/65 transition-all hover:text-foreground focus-visible:text-foreground"
	{...props}
>
	<span
		class="h-px w-14 bg-foreground/60 transition-all group-hover:w-20 group-hover:bg-foreground group-focus-visible:w-20 group-focus-visible:bg-foreground"
	></span>
	<span class="text-sm font-bold uppercase tracking-widest">
		{@render children?.()}
	</span>
</a>
