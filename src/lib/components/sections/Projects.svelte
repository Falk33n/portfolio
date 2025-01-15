<script lang="ts">
	import {
		Card,
		CardDescription,
		CardHeader,
		CardImage,
		CardTags,
	} from '$components/interactive';
	import { SectionEndHeading, SectionHeading } from '$components/sections';
	import { PROJECT_CARDS } from '$constants';
</script>

<section
	id="projects"
	class="lg:scroll-mt-20"
>
	<SectionHeading>Projects</SectionHeading>

	{#each PROJECT_CARDS as { desc, href, title, src, alt, tags }}
		<Card
			{href}
			class="mb-8 last:mb-0"
		>
			<span class="w-fit">
				<CardImage
					{href}
					{alt}
					{src}
				/>
			</span>
			<div>
				<CardHeader
					{href}
					{title}
				/>
				<CardDescription
					{title}
					{desc}
				/>
				<CardTags {tags} />
			</div>
		</Card>
	{/each}

	<SectionEndHeading
		href="https://github.com/Falk33n?tab=repositories"
		ariaLabel="Go to Tim Falk's GitHub repositories, opens in a new tab"
	>
		View all projects
	</SectionEndHeading>
</section>
