<script lang="ts">
	import { CursorGlowEffect } from '$lib/components/decorative';
	import '$src/app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />
<CursorGlowEffect />

<main id="main">{@render children()}</main>
