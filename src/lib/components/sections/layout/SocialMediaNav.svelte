<script lang="ts">
	import { ModeToggleButton } from '$components/forms';
	import {
		GithubLink,
		LinkedInLink,
		ResumeLink,
	} from '$components/sections/layout';
	import ContactLink from './ContactLink.svelte';
</script>

<div class="mt-16 flex max-w-xs flex-wrap items-center justify-between gap-4">
	<nav class="flex flex-wrap items-center gap-4">
		<GithubLink />
		<LinkedInLink />
		<ResumeLink />
		<ContactLink />
	</nav>

	<ModeToggleButton />
</div>
