<script lang="ts">
	import { SectionLink } from '$components/sections/layout';
	import { onMount } from 'svelte';

	let activeSection = $state<string | null>(null);

	const sections = ['about', 'experience', 'projects'];

	function observeSections(entries: IntersectionObserverEntry[]) {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				activeSection = entry.target.id;
				break;
			}
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(observeSections, {
			threshold: 0.5,
		});

		sections.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<nav
	aria-label="Same-page navigation links"
	class="mt-10 flex flex-col gap-3 max-lg:hidden"
>
	{#each sections as id}
		<SectionLink
			href={`/#${id}`}
			aria-label={`Go to the ${id} section`}
			isCurrentSection={activeSection === id}
		>
			{id}
		</SectionLink>
	{/each}
</nav>
