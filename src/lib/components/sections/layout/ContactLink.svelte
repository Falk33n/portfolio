<script lang="ts">
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button as Link } from '$components/forms';
	import { CommentShare } from '$components/icons';

	const contactTitle = 'Send Tim Falk an email';
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Link
					href="mailto:tim.falk00@gmail.com"
					aria-label={contactTitle}
					variant="outline"
					size="icon"
					{...props}
				>
					<CommentShare class="scale-125" />
				</Link>
			{/snippet}
		</TooltipTrigger>

		<TooltipContent>{contactTitle}</TooltipContent>
	</Tooltip>
</TooltipProvider>
