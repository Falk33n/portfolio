type Tag = {
	'title': string;
	'href': string;
	'aria-label': string;
};

type CardProp = {
	href: string;
	timeline: string;
	company: string;
	title: string;
	desc: string;
	tags?: Tag[];
};

export const EXPERIENCE_CARDS: CardProp[] = [
	{
		href: 'https://www.combitech.se/',
		company: 'Combitech',
		title: 'Front-End Developer Intern',
		timeline: 'Apr — Jun 2024',
		desc: 'During my first internship at Combietech, I collaborated with another intern to create a chatbot similar to ChatGPT. The goal was to ensure the chatbot remained anonymous and did not learn from the data it received. I developed a fully functioning chat interface and implemented an agent mechanism that allowed users to create specialized chatbots tailored to their needs. Additionally, I devised a secure method for managing chat IDs.',
		tags: [
			{
				'title': 'React',
				'aria-label': 'Go to React website',
				'href': 'https://react.dev/',
			},
			{
				'title': 'Next.js',
				'aria-label': 'Go to Next.js website',
				'href': 'https://nextjs.org/',
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
			{
				'title': 'C#',
				'aria-label': 'Go to C# website',
				'href': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
			},
			{
				'title': '.NET',
				'aria-label': 'Go to .NET website',
				'href': 'https://dotnet.microsoft.com/en-us/',
			},
		],
	},
	{
		href: 'https://www.combitech.se/',
		company: 'Combitech',
		title: 'Full-Stack Developer Intern',
		timeline: 'Nov 2024 — Present',
		desc: 'During my second internship, I have completed several tasks, including developing a secure method for storing large files locally on the server only while the session is active. I also created a fully functional image generator using Stable Diffusion. Additionally, I gained valuable experience in Python for backend development and SvelteKit for full-stack web development. Furthermore, I explored graph databases, learning how they work and how to visualize them effectively using Neo4j and Cypher.',
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
			{
				'title': 'Python',
				'aria-label': 'Go to Python website',
				'href': 'https://www.python.org/',
			},
			{
				'title': 'Pydantic',
				'aria-label': 'Go to Pydantic website',
				'href': 'https://docs.pydantic.dev/latest/',
			},
			{
				'title': 'PyTorch',
				'aria-label': 'Go to PyTorch website',
				'href': 'https://pytorch.org/',
			},
			{
				'title': 'Stable-Diffusion',
				'aria-label': 'Go to Stable-Diffusion GitHub page',
				'href': 'https://github.com/CompVis/stable-diffusion',
			},
			{
				'title': 'Neo4J',
				'aria-label': 'Go to Neo4J website',
				'href': 'https://neo4j.com/',
			},
			{
				'title': 'Cypher',
				'aria-label': 'Go to Cypher website',
				'href': 'https://neo4j.com/docs/cypher-manual/current/introduction/',
			},
		],
	},
];
