<script lang="ts">
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button as Link } from '$components/forms';
	import { H1 } from '$components/typography';
</script>

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
