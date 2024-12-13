<script lang="ts">
	import { Link } from '$components/sections';
</script>

<footer class="flex flex-1 flex-col justify-end">
	<p class="max-w-sm text-sm text-foreground/80">
		Coded by Tim Falk in
		<Link
			href="https://code.visualstudio.com/"
			aria-label="Go to the Visual Studio Code website, opens in a new tab"
		>
			Visual Studio Code
		</Link>, built using
		<Link
			href="https://svelte.dev/docs/kit/introduction"
			aria-label="Go to the SvelteKit website, opens in a new tab"
		>
			SvelteKit
		</Link>, and designed with
		<Link
			href="https://tailwindcss.com/"
			aria-label="Go to the Tailwind CSS website, opens in a new tab"
		>
			Tailwind CSS
		</Link>. Deployed via
		<Link
			href="https://vercel.com/"
			aria-label="Go to the Vercel website, opens in a new tab"
		>
			Vercel
		</Link>, with all text styled in the
		<Link
			href="https://vercel.com/font"
			aria-label="Go to the Geist-Sans website, opens in a new tab"
		>
			Geist-Sans
		</Link> typeface.
	</p>
</footer>
