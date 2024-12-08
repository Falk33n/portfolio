<script lang="ts">
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button as Link } from '$components/forms';
	import { LinkedIn } from '$components/icons';

	const linkedInTitle = "Go to Tim Falk's LinkedIn profile, opens in a new tab";
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Link
					href="https://www.linkedin.com/in/timfalkwebbdev/"
					aria-label={linkedInTitle}
					variant="outline"
					size="icon"
					target="_blank"
					{...props}
				>
					<LinkedIn class="scale-125" />
				</Link>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent>{linkedInTitle}</TooltipContent>
	</Tooltip>
</TooltipProvider>
