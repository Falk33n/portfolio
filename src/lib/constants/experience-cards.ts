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
		title: 'Full-Stack Developer Intern',
		timeline: 'April — June 2024',
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
];
