<script lang="ts">
	import { ModeToggleButton } from '$components/forms';
	import {
		ContactLink,
		GithubLink,
		LinkedInLink,
		ResumeLink,
	} from '$components/sections/layout';
</script>

<div class="mt-10 flex max-w-xs flex-wrap items-center gap-4">
	<nav
		aria-label="Social media and other navigation links"
		class="flex flex-wrap items-center gap-4"
	>
		<GithubLink />
		<LinkedInLink />
		<ResumeLink />
		<ContactLink />
	</nav>

	<span
		aria-hidden="true"
		class="h-8 w-px bg-muted"
	></span>
	<ModeToggleButton />
</div>
