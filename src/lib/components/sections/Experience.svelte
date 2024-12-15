<script lang="ts">
	import {
		Card,
		CardDescription,
		CardHeader,
		CardTags,
		CardTimeline,
	} from '$components/interactive';
	import { SectionHeading } from '$components/sections';
	import { EXPERIENCE_CARDS } from '$constants';
</script>

<section id="experience">
	<SectionHeading>Experience</SectionHeading>

	{#each EXPERIENCE_CARDS as { company, desc, href, timeline, title, tags }}
		<Card {href}>
			<span class="md:w-[400px] lg:w-[530px]">
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
</section>
