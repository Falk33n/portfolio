type Tag = {
	'title': string;
	'href': string;
	'aria-label': string;
};

type CardProp = {
	href: string;
	title: string;
	desc: string;
	src: string;
	alt: string;
	tags?: Tag[];
};

export const PROJECT_CARDS: CardProp[] = [
	{
		href: 'https://github.com/Falk33n/portfolio',
		title: 'Portfolio V2',
		desc: 'The latest version of my portfolio, created in January 2025 by me. Built with SvelteKit and ShadCN-Svelte as the UI library of choice.',
		src: '/images/portfolio-v2.webp',
		alt: 'The latest version of my portfolio (The current website).',
		tags: [
			{
				'title': 'SvelteKit',
				'aria-label': 'Go to SvelteKit website',
				'href': 'https://svelte.dev/docs/kit/introduction',
			},
			{
				'title': 'Tailwind CSS',
				'aria-label': 'Go to Tailwind CSS website',
				'href': 'https://tailwindcss.com/',
			},
			{
				'title': 'ShadCN-Svelte',
				'aria-label': 'Go to ShadCN-Svelte website',
				'href': 'https://next.shadcn-svelte.com/',
			},
			{
				'title': 'TypeScript',
				'aria-label': 'Go to TypeScript website',
				'href': 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		href: 'https://github.com/Falk33n/teknik-expressen',
		title: 'Teknik Expressen',
		desc: 'My ongoing final thesis project involves creating a tech e-commerce website for a fictional company, inspired by Komplett, a similar e-commerce platform. It is built with Next.js using the Next T3 Stack, Prisma, Tailwind CSS, and TypeScript.',
		src: '/images/teknik-expressen.webp',
		alt: 'TeknikExpressen a tech e-commerce website.',
		tags: [
			{
				'title': 'Next.js',
				'aria-label': 'Go to Next.js website',
				'href': 'https://nextjs.org/',
			},
			{
				'title': 'Next T3 Stack',
				'aria-label': 'Go to Next T3 Stack website',
				'href': 'https://create.t3.gg/',
			},
			{
				'title': 'Tailwind CSS',
				'aria-label': 'Go to Tailwind CSS website',
				'href': 'https://tailwindcss.com/',
			},
			{
				'title': 'ShadCN',
				'aria-label': 'Go to ShadCN website',
				'href': 'https://ui.shadcn.com/',
			},
			{
				'title': 'TypeScript',
				'aria-label': 'Go to TypeScript website',
				'href': 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		href: 'https://github.com/Falk33n/shadcn-svelte-independent',
		title: 'ShadCN-Svelte Independent',
		desc: 'A custom-made UI library currently in development, designed similarly to ShadCN-Svelte but independent in the sense that it requires nothing other than Svelte to run.',
		src: '/images/shadcn-svelte-independent.webp',
		alt: 'ShadCN-Svelte Independent the UI library of choiice for Svelte developers.',
		tags: [
			{
				'title': 'SvelteKit',
				'aria-label': 'Go to SvelteKit website',
				'href': 'https://svelte.dev/docs/kit/introduction',
			},
			{
				'title': 'TypeScript',
				'aria-label': 'Go to TypeScript website',
				'href': 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		href: 'https://github.com/Falk33n/Portfolio-V1',
		title: 'Portfolio V1',
		desc: 'After one month into my developer journey, I created a portfolio using native JavaScript and Tailwind CSS. It turned out to be a great project for further improving my development skills.',
		src: '/images/portfolio-v1.webp',
		alt: 'The first version of my portfolio.',
		tags: [
			{
				'title': 'HTML',
				'aria-label': 'Go to HTML website',
				'href': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			},
			{
				'title': 'JavaScript',
				'aria-label': 'Go to JavaScript website',
				'href': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			},
			{
				'title': 'Tailwind CSS',
				'aria-label': 'Go to Tailwind CSS website',
				'href': 'https://tailwindcss.com/',
			},
		],
	},
	{
		href: 'https://github.com/Falk33n/memory-game',
		title: 'Memory Game',
		desc: 'My first ever JavaScript project was a memory game, featuring functionalities such as a timer, a reset game option, and a tries counter.',
		src: '/images/memory-game.webp',
		alt: 'A memory game made in JavaScript',
		tags: [
			{
				'title': 'HTML',
				'aria-label': 'Go to HTML website',
				'href': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			},
			{
				'title': 'JavaScript',
				'aria-label': 'Go to JavaScript website',
				'href': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			},
			{
				'title': 'CSS',
				'aria-label': 'Go to CSS website',
				'href': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			},
		],
	},
];
