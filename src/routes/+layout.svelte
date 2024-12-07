<script lang="ts">
	import '$src/app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />

<main id="main">{@render children()}</main>
