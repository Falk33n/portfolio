<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes;

	let { children, 'aria-label': ariaLabel, href, ...props }: Props = $props();
</script>

<a
	aria-label={ariaLabel}
	rel="noopener noreferrer"
	target="_blank"
	class="text-foreground underline underline-offset-2 transition-colors hover:text-primary focus-visible:text-primary"
	{href}
	{...props}
>
	{@render children?.()}
</a>
