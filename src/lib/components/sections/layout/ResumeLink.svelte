<script lang="ts">
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button as Link } from '$components/forms';
	import { FilePencil } from '$components/icons';

	const resumeTitle = "Go to Tim Falk's resumé, opens in a new tab";
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Link
					href="/files/resume.pdf"
					aria-label={resumeTitle}
					variant="outline"
					size="icon"
					target="_blank"
					{...props}
				>
					<FilePencil class="scale-125" />
				</Link>
			{/snippet}
		</TooltipTrigger>

		<TooltipContent>{resumeTitle}</TooltipContent>
	</Tooltip>
</TooltipProvider>
