<script lang="ts">
	import { cn } from '$utils';
	import { onMount } from 'svelte';

	function updateMousePosition(e: MouseEvent) {
		mousePosition = { x: e.clientX, y: e.clientY };
	}

	function updateScrollPosition() {
		scrollPositionY = window.scrollY;
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

	let mousePosition = $state({ x: 0, y: 0 });
	let scrollPositionY = $state(0);
	let isTouchDevice = $state(false);

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

<div
	aria-hidden="true"
	class="pointer-events-none fixed left-0 top-0 z-[9999] size-full"
>
	<div
		aria-hidden="true"
		class={cn(
			'custom-transition custom-background pointer-events-none -translate-y-1/2 rounded-full opacity-10  mix-blend-soft-light',
			isTouchDevice
				? 'fixed size-[650px]'
				: 'absolute size-[800px] -translate-x-1/2',
		)}
		style={isTouchDevice
			? `top: calc(50% + ${scrollY}px); left: -200px;`
			: `top: ${mousePosition.y}px; left: ${mousePosition.x}px;`}
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
