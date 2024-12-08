<script lang="ts">
	import { SectionLink } from '$components/sections/layout';
</script>

<nav
	aria-label="Same-page navigation links"
	class="mt-10 flex flex-col gap-3"
>
	<SectionLink
		href="#about"
		aria-label="Go to the about section"
	>
		About
	</SectionLink>
	<SectionLink
		href="#experience"
		aria-label="Go to the experience section"
	>
		Experience
	</SectionLink>
	<SectionLink
		href="#projects"
		aria-label="Go to the projects section"
	>
		Projects
	</SectionLink>
</nav>
