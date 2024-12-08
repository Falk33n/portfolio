<script lang="ts">
	import { Github } from '$components/decorative/icons';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button as Link } from '$components/forms';

	const githubTitle = "Go to Tim Falk's GitHub profile, opens in a new tab";
</script>

<nav>
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<Link
						href="https://github.com/Falk33n"
						aria-label={githubTitle}
						variant="outline"
						size="icon"
						target="_blank"
						{...props}
					>
						<Github class="scale-125" />
					</Link>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent>
				{githubTitle}
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
</nav>
