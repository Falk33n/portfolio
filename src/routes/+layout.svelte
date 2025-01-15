<script lang="ts">
	import { GlowEffect } from '$components/decorative';
	import { Footer, Navbar } from '$components/sections/layout';
	import '$src/app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
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
		name="apple-mobile-web-app-title"
		content="Portfolio"
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
		content="https://portfolio-falk33ns-projects.vercel.app/images/me.png"
	/>
	<meta
		property="og:url"
		content="https://portfolio-falk33ns-projects.vercel.app/"
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
		content="https://portfolio-falk33ns-projects.vercel.app/images/me.png"
	/>
	<meta
		name="twitter:site"
		content="@TimFalk525712"
	/>
	<meta
		name="twitter:creator"
		content="@TimFalk525712"
	/>
	<meta
		name="keywords"
		content="Tim Falk, Full Stack Developer, Web Development, Portfolio, Accessible Design, Scalable Solutions, Software Engineer, Web Developer, Svelte, SvelteKit, Next, React, AI, JavaScript, HTML, CSS, TypeScript, Tailwind CSS, tRPC, Prisma, MySQL, Next T3 Stack, Python, PyDantic, PyTorch, PyLint, Black, Hugging Face"
	/>
	<meta
		name="robots"
		content="index, follow"
	/>
	<meta
		name="theme-color"
		content="#020617"
	/>
	<link
		rel="canonical"
		href="https://portfolio-falk33ns-projects.vercel.app/"
	/>
	<link
		rel="icon"
		type="image/png"
		href="/favicon/favicon-96x96.png"
		sizes="96x96"
	/>
	<link
		rel="icon"
		type="image/svg+xml"
		href="/favicon/favicon.svg"
	/>
	<link
		rel="shortcut icon"
		href="/favicon/favicon.ico"
	/>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/favicon/apple-touch-icon.png"
	/>
	<link
		rel="manifest"
		href="/favicon/site.webmanifest"
	/>
	<title>Tim Falk | Full Stack Developer</title>
</svelte:head>

<GlowEffect />
<ModeWatcher
	defaultMode="dark"
	disableTransitions
/>

<div class="lg:flex">
	<Navbar />

	<div class="lg:mt-0 lg:flex lg:w-1/2 lg:flex-col">
		<main
			id="main-content"
			class="mb-28 space-y-28 max-lg:mt-28 md:scroll-mt-28"
		>
			{@render children()}
		</main>

		<Footer />
	</div>
</div>
