<script lang="ts">
	import { MoonHalf, Sun } from '$components/decorative/icons';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button } from '$components/forms';
	import { mode, toggleMode } from 'mode-watcher';

	const Icon = $derived($mode === 'light' ? Sun : MoonHalf);
	const title = $derived(
		`Change the color theme to ${$mode === 'light' ? 'dark mode' : 'light mode'}`,
	);
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger onclick={toggleMode}>
			{#snippet child({ props })}
				<Button
					aria-label={title}
					variant="outline"
					size="icon"
					{...props}
				>
					<Icon class="scale-150 dark:rotate-90 dark:scale-125" />
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent>
			{title}
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
