<script lang="ts">
	import {
		Card,
		CardDescription,
		CardHeader,
		CardTags,
		CardTimeline,
	} from '$components/interactive';
	import { SectionEndHeading, SectionHeading } from '$components/sections';
	import { EXPERIENCE_CARDS } from '$constants';
</script>

<section
	id="experience"
	class="lg:scroll-mt-20"
>
	<SectionHeading>Experience</SectionHeading>

	{#each EXPERIENCE_CARDS as { company, desc, href, timeline, title, tags }}
		<Card
			{href}
			class="mb-8 last:mb-0"
		>
			<span class="w-fit">
				<CardTimeline {timeline} />
			</span>
			<div>
				<CardHeader
					{href}
					{company}
					{title}
				/>
				<CardDescription
					{company}
					{desc}
				/>
				<CardTags {tags} />
			</div>
		</Card>
	{/each}

	<SectionEndHeading
		href="/files/resume.pdf"
		ariaLabel="Go to Tim Falk's resumé, opens in a new tab"
	>
		View full Resumé
	</SectionEndHeading>
</section>
