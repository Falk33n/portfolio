<script lang="ts">
	import { FooterLink } from '$components/sections/layout';
</script>

<footer class="flex flex-1 flex-col justify-end">
	<p class="max-w-sm text-sm text-foreground/80">
		Coded in
		<FooterLink
			href="https://code.visualstudio.com/"
			aria-label="Go to the Visual Studio Code website, opens in a new tab"
		>
			Visual Studio Code
		</FooterLink>
		by Tim Falk, built with
		<FooterLink
			href="https://svelte.dev/docs/kit/introduction"
			aria-label="Go to the SvelteKit website, opens in a new tab"
		>
			SvelteKit
		</FooterLink>, designed with
		<FooterLink
			href="https://tailwindcss.com/"
			aria-label="Go to the Tailwind CSS website, opens in a new tab"
		>
			Tailwind CSS
		</FooterLink>, deployed with
		<FooterLink
			href="https://vercel.com/"
			aria-label="Go to the Vercel website, opens in a new tab"
		>
			Vercel
		</FooterLink>. All text is set in the
		<FooterLink
			href="https://vercel.com/font"
			aria-label="Go to the Geist-Sans website, opens in a new tab"
		>
			Geist-Sans
		</FooterLink> typeface.
	</p>
</footer>
