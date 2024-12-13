<script lang="ts">
	import {
		Header,
		SectionsNav,
		SkipToContent,
		SocialMediaNav,
	} from '$components/sections/layout';
</script>

<SkipToContent />

<div
	class="flex w-full flex-col lg:sticky lg:top-[6rem] lg:h-[calc(100vh-12rem)] lg:w-1/2"
>
	<Header />
	<SocialMediaNav class="lg:hidden" />
	<SectionsNav />
	<SocialMediaNav class="mt-auto max-lg:hidden" />
</div>
