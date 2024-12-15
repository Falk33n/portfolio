<script lang="ts">
	import { ArrowTopRight } from '$components/icons';
	import { onMount } from 'svelte';

	type Props = {
		href: string;
		title: string;
		company: string;
	};

	let { href, title, company }: Props = $props();

	let isLargeScreen = $state(false);

	onMount(() => {
		const updateMediaQuery = () => {
			isLargeScreen = window.innerWidth >= 1024;
			console.log(isLargeScreen);
		};

		updateMediaQuery();

		window.addEventListener('resize', updateMediaQuery);

		return () => window.removeEventListener('resize', updateMediaQuery);
	});
</script>

{#if isLargeScreen}
	<div
		aria-describedby={`card-content-${company}`}
		class="group my-2 flex w-fit items-center gap-1.5 transition-colors hover:text-primary focus-visible:text-primary"
	>
		{@html title}
		<span aria-label="at">•</span>
		{@html company}
		<ArrowTopRight
			class="size-5 transition-all group-hover:-translate-y-0.5 group-hover:[&>path]:fill-primary group-focus-visible:[&>path]:fill-primary"
		/>
	</div>
{:else}
	<a
		{href}
		rel="noopener noreferrer"
		target="_blank"
		aria-label={`Go to the ${company} website, opens in a new tab`}
		aria-describedby={`card-content-${company}`}
		class="group my-2 flex w-fit items-center gap-1.5 transition-colors hover:text-primary focus-visible:text-primary"
	>
		{@html title}
		<span aria-label="at">•</span>
		{@html company}
		<ArrowTopRight
			class="size-5 transition-all group-hover:-translate-y-0.5 group-hover:[&>path]:fill-primary group-focus-visible:[&>path]:fill-primary"
		/>
	</a>
{/if}
