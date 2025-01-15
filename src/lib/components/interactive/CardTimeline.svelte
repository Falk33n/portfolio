<script lang="ts">
	import { H4 } from '$components/typography';

	let { timeline }: { timeline: string } = $props();
</script>

<H4
	class="mb-1.5 mt-3 text-xs font-medium uppercase tracking-widest text-foreground/60 md:w-[150px] lg:w-[190px]"
>
	<time>{@html timeline}</time>
</H4>
