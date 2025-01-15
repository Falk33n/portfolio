<script lang="ts">
	import { ArrowTopRight } from '$components/icons';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
		href: string;
		ariaLabel: string;
	};

	let { children, href, ariaLabel }: Props = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={ariaLabel}
	class="group my-2 flex w-fit flex-wrap items-center gap-1.5 transition-colors hover:text-primary focus-visible:text-primary group-hover:text-primary group-focus-visible:text-primary"
>
	{@render children?.()}
	<ArrowTopRight
		class="size-5 transition-all group-hover:-translate-y-0.5 group-hover:[&>path]:fill-primary group-focus-visible:[&>path]:fill-primary"
	/>
</a>
