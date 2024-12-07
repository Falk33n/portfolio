<script lang="ts">
	import { GlowEffect } from '$lib/components/decorative';
	import { Navbar } from '$lib/components/sections';
	import '$src/app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />

<GlowEffect />

<Navbar />

<main id="main-content">{@render children()}</main>
