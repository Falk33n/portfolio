import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type TypographyProps = HTMLAttributes<
	HTMLHeadingElement | HTMLParagraphElement
> & { children: Snippet<[]>; class?: string };

export { H1 } from './h1';
export { H2 } from './h2';
export { H3 } from './h3';
export { H4 } from './h4';
export { P } from './p';
