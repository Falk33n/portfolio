<script lang="ts">
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button as Link } from '$components/forms';
	import { H1, H2, P } from '$components/typography';
</script>

<header class="space-y-3">
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Link
						href="/"
						variant="ghost"
						class="-ml-1 p-1 hover:bg-[unset]"
						aria-label="Go to the home page"
						{...props}
					>
						<H1>Tim Falk</H1>
					</Link>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent>Go to the home page</TooltipContent>
		</Tooltip>
	</TooltipProvider>

	<H2 class="border-none pb-0 text-xl md:text-2xl">Full Stack Developer</H2>

	<P class="max-w-xs text-foreground/80">
		I craft experiences that matter—impactful today and meaningful for the
		future.
	</P>
</header>
