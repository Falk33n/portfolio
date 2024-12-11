<script lang="ts">
	import { GlowEffect } from '$components/decorative';
	import { Navbar } from '$components/sections/layout';
	import '$src/app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>Tim Falk | Full Stack Developer</title>
	<meta
		name="description"
		content="Tim Falk's portfolio showcasing projects, skills, and contact information as a Full Stack Developer. I create accessible, scalable, and modern web solutions."
	/>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0"
	/>
	<meta charset="UTF-8" />
	<meta
		http-equiv="x-ua-compatible"
		content="IE=edge"
	/>
	<meta
		name="author"
		content="Tim Falk"
	/>
	<meta
		property="og:title"
		content="Tim Falk | Full Stack Developer"
	/>
	<meta
		property="og:description"
		content="Discover Tim Falk's portfolio of web development projects and skills. Let's build something great together!"
	/>
	<meta
		property="og:image"
		content="https://example.com/og-image.jpg"
	/>
	<meta
		property="og:url"
		content="https://example.com/"
	/>
	<meta
		property="og:type"
		content="website"
	/>
	<meta
		property="og:locale"
		content="en_US"
	/>
	<meta
		name="twitter:card"
		content="summary_large_image"
	/>
	<meta
		name="twitter:title"
		content="Tim Falk | Full Stack Developer"
	/>
	<meta
		name="twitter:description"
		content="Explore Tim Falk's portfolio of web development projects and skills."
	/>
	<meta
		name="twitter:image"
		content="https://example.com/og-image.jpg"
	/>
	<meta
		name="twitter:site"
		content="@yourtwitterhandle"
	/>
	<meta
		name="twitter:creator"
		content="@yourtwitterhandle"
	/>
	<meta
		name="keywords"
		content="Tim Falk, Full Stack Developer, Web Development, Portfolio, Accessible Design, Scalable Solutions, Software Engineer, Web Developer, Svelte, SvelteKit, Next, React, AI, JavaScript, HTML, CSS, TypeScript, Tailwind CSS, tRPC, Prisma, MySQL, Next T3 Stack"
	/>
	<meta
		name="robots"
		content="index, follow"
	/>
	<meta
		name="theme-color"
		content="#ffffff"
	/>
	<link
		rel="icon"
		href="/favicon.ico"
	/>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/apple-touch-icon.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon-16x16.png"
	/>
	<link
		rel="manifest"
		href="/site.webmanifest"
	/>
	<link
		rel="canonical"
		href="https://example.com/"
	/>
</svelte:head>

<ModeWatcher />
<GlowEffect />

<div class="lg:flex">
	<Navbar />

	<div class="mt-28 lg:mt-0 lg:w-1/2">
		<main
			id="main-content"
			class="space-y-28"
		>
			{@render children()}
		</main>

		<!-- Footer goes here -->
	</div>
</div>
