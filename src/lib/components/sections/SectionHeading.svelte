<script lang="ts">
	import { H3 } from '$components/typography';

	let { children } = $props();
</script>

<H3
	class="z-20 w-full py-4 text-sm uppercase tracking-widest backdrop-blur-sm max-lg:sticky max-lg:top-0 lg:sr-only"
>
	{@render children?.()}
</H3>
