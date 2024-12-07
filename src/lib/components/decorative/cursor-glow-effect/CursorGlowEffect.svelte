<script lang="ts">
	import { onMount } from 'svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let isTouchDevice = $state(false);

	function updateMousePosition(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	function updateTouchDeviceStatus() {
		isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
		if (!isTouchDevice) {
			window.addEventListener('mousemove', updateMousePosition);
		} else {
			window.removeEventListener('mousemove', updateMousePosition);
		}
	}

	onMount(() => {
		updateTouchDeviceStatus();
		window
			.matchMedia('(pointer: coarse)')
			.addEventListener('change', updateTouchDeviceStatus);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
			window
				.matchMedia('(pointer: coarse)')
				.removeEventListener('change', updateTouchDeviceStatus);
		};
	});
</script>

{#if !isTouchDevice}
	<div class="pointer-events-none fixed left-0 top-0 z-[9999] size-full">
		<div
			class="custom-transition custom-background pointer-events-none absolute size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-10 mix-blend-soft-light"
			style="top: {mouseY}px; left: {mouseX}px;"
		></div>
	</div>
{/if}

<style>
	.custom-transition {
		transition:
			transform 0.1s,
			opacity 0.3s;
	}

	.custom-background {
		background: radial-gradient(
			circle,
			rgba(255, 255, 255, 0.4) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
</style>
