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
	class="sticky top-0 flex w-full flex-col lg:h-[calc(100vh-14rem)] lg:w-1/2"
>
	<Header />
	<SocialMediaNav class="lg:hidden" />
	<SectionsNav />
	<SocialMediaNav class="mt-auto max-lg:hidden" />
</div>
