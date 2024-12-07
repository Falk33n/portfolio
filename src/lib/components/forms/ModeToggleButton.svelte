<script lang="ts">
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components/feedback';
	import { Button } from '$components/forms';
	import { Moon, Sun } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';

	const Icon = $derived($mode === 'light' ? Sun : Moon);
	const title = $derived(
		`Change the theme to ${$mode === 'light' ? 'dark Mode' : 'light Mode'}`,
	);
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button
					onclick={toggleMode}
					aria-label={title}
					variant="outline"
					size="icon"
					{...props}
				>
					<Icon class="size-[1.2rem] transition-all dark:-rotate-90" />
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent>
			{title}
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
