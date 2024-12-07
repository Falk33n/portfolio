<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let scrollY = $state(0);
	let isTouchDevice = $state(false);

	function updateMousePosition(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	function updateScrollPosition() {
		scrollY = window.scrollY;
	}

	function updateTouchDeviceStatus() {
		isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
		if (isTouchDevice) {
			window.addEventListener('scroll', updateScrollPosition);
			window.removeEventListener('mousemove', updateMousePosition);
		} else {
			window.addEventListener('mousemove', updateMousePosition);
			window.removeEventListener('scroll', updateScrollPosition);
		}
	}

	onMount(() => {
		updateTouchDeviceStatus();
		const mediaQuery = window.matchMedia('(pointer: coarse)');
		mediaQuery.addEventListener('change', updateTouchDeviceStatus);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
			window.removeEventListener('scroll', updateScrollPosition);
			mediaQuery.removeEventListener('change', updateTouchDeviceStatus);
		};
	});
</script>

<div class="pointer-events-none fixed left-0 top-0 z-[9999] size-full">
	<div
		class={cn(
			'custom-transition custom-background pointer-events-none -translate-y-1/2 rounded-full opacity-10  mix-blend-soft-light',
			isTouchDevice
				? 'fixed size-[650px]'
				: 'absolute size-[800px] -translate-x-1/2',
		)}
		style={isTouchDevice
			? `top: calc(50% + ${scrollY}px); left: -200px;`
			: `top: ${mouseY}px; left: ${mouseX}px;`}
	></div>
</div>

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
