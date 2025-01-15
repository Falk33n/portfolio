<script lang="ts">
	import { P } from '$components/typography';

	type Props = {
		desc: string;
		company?: string;
		title?: string;
	};

	let { desc, title, company }: Props = $props();
</script>

<P
	id={`card-content-${company ?? title}`}
	class="text-sm leading-6 text-foreground/80 [&:not(:first-child)]:mt-1"
>
	{@html desc}
</P>
