type CardProp = {
	href: string;
	timeline: string;
	company: string;
	title: string;
	desc: string;
	tags?: string[];
};

export const EXPERIENCE_CARDS: CardProp[] = [
	{
		href: 'dod',
		company: 'Combitech',
		title: 'Full-Stack Developer',
		timeline: '2024 — Present',
		desc: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
		tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
	},
];
