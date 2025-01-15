<script lang="ts">
	import { browser } from '$app/environment';
	import { CardSkeleton } from '$components/interactive';
	import { cn } from '$utils';
	import { onMount } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes;

	let { children, class: className, ...props }: Props = $props();

	let isLargeScreen = $state(false);

	onMount(() => {
		const updateMediaQuery = () => {
			isLargeScreen = window.innerWidth >= 1024;
		};

		updateMediaQuery();

		window.addEventListener('resize', updateMediaQuery);

		return () => window.removeEventListener('resize', updateMediaQuery);
	});
</script>

{#if !browser}
	<CardSkeleton />
{:else if !isLargeScreen}
	<div class={cn('md:flex', className)}>
		{@render children?.()}
	</div>
{:else}
	<a
		rel="noopener noreferrer"
		target="_blank"
		class={cn(
			'group -ml-4 -mt-4 flex rounded-md border border-transparent p-4 pb-8 transition-all hover:border-border hover:bg-secondary/70 hover:shadow-md dark:hover:border-primary/15 dark:hover:bg-primary/5 dark:hover:shadow-none',
			className,
		)}
		{...props}
	>
		{@render children?.()}
	</a>
{/if}
