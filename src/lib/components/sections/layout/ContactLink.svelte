<script lang="ts">
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button as Link } from '$components/forms';
	import { CommentShare } from '$components/icons';

	const contactTitle = 'Go to the contact page';
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Link
					href="https://github.com/Falk33n"
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
