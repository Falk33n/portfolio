<script lang="ts">
	import { ArrowTopRight } from '$components/icons';

	type Props = {
		href: string;
		title: string;
		company: string;
	};

	let { href, title, company }: Props = $props();
</script>

<a
	{href}
	rel="noopener noreferrer"
	target="_blank"
	aria-label={`Go to the ${company} website, opens in a new tab`}
	aria-describedby={`card-content-${company}`}
	class="group my-2 flex w-fit items-center gap-1.5 transition-colors hover:text-primary focus-visible:text-primary group-hover:text-primary group-focus-visible:text-primary"
>
	{@html title}
	<span aria-label="at">•</span>
	{@html company}
	<ArrowTopRight
		class="size-5 transition-all group-hover:-translate-y-0.5 group-hover:[&>path]:fill-primary group-focus-visible:[&>path]:fill-primary"
	/>
</a>
