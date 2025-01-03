<script lang="ts">
	import { Skeleton } from '$components/feedback';
</script>

<Skeleton class="my-3 h-7 w-[150px] max-w-full rounded-md sm:w-[250px]" />
<Skeleton class="mb-3 h-7 w-[250px] max-w-full rounded-md sm:w-[400px]" />

<Skeleton class="mb-3 h-28 w-full rounded-md" />
<span
	aria-hidden="true"
	class="flex gap-1.5"
>
	<Skeleton class="h-5 w-[50px] rounded-md" />
	<Skeleton class="h-5 w-[50px] rounded-md" />
	<Skeleton class="h-5 w-[50px] rounded-md" />
</span>
