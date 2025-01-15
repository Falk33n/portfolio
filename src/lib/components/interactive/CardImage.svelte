<script lang="ts">
	type Props = {
		alt: string;
		src: string;
		href: string;
	};

	let { href, alt, src }: Props = $props();
</script>

<figure class="mb-4 mt-3 h-full md:w-[150px] lg:w-[190px]">
	<a
		{href}
		class="inline-block"
		rel="noopener noreferrer"
		target="_blank"
	>
		<img
			class="h-auto w-full max-w-[120px] rounded-sm border lg:max-w-[160px]"
			loading="lazy"
			{alt}
			{src}
		/>
	</a>
</figure>
