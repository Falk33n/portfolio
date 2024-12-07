<script lang="ts">
	import { GlowEffect } from '$components/decorative';
	import { Header, Navbar } from '$components/sections/layout';
	import '$src/app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<div class="px-6 py-12 md:px-12 md:py-16 lg:px-14 lg:py-28">
	<ModeWatcher />
	<GlowEffect />

	<Header />
	<Navbar />

	<main id="main-content">
		{@render children()}
	</main>
</div>
