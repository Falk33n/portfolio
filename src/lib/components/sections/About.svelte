<script lang="ts">
	import { Link, SectionHeading } from '$components/sections';
	import { P } from '$components/typography';
</script>

<section
	id="about"
	class="mb-96"
>
	<SectionHeading>About</SectionHeading>

	<P
		class="text-foreground/80 [&:not(:first-child)]:mt-3 lg:[&:not(:first-child)]:mt-0"
	>
		I am a passionate full-stack developer who loves creating accessible,
		scalable, and modern web solutions. I thrive when building advanced backends
		and have a deep-seated enthusiasm for web development. My passion began in
		high school, though I took a few years off before resuming my journey in
		<time datetime="2023">2023</time>, when I started studying to become a
		Full-Stack Developer at
		<Link
			href="https://www.tucsweden.se/om-tuc/utbildningsorter/yrkeshogskola-jonkoping/"
			aria-label="Go to the TUC Yrkeshögskola website, opens in a new tab"
			lang="sv"
		>
			TUC Yrkeshögskola
		</Link>. I am set to graduate in <time datetime="2025-04">April 2025</time>.
	</P>

	<P class="text-foreground/80">
		I have completed one internship and am currently continuing another at
		<Link
			href="https://www.combitech.se/"
			aria-label="Go to the Combitech website, opens in a new tab"
		>
			Combitech
		</Link>
		in <span lang="sv">Skövde</span>, a tech company and a subsidiary of
		<Link
			href="https://www.saab.com/"
			aria-label="Go to the SAAB website, opens in a new tab"
		>
			SAAB
		</Link>. This ongoing internship will continue until my graduation and has
		provided me with invaluable experience and knowledge, solidifying my
		conviction that this is the perfect career path for me.
	</P>

	<P class="text-foreground/80">
		In my free time, I enjoy spending time with my girlfriend and our cat, Luna,
		exploring nature, and playing video games. Of course, I also love coding and
		learning new things through hobby projects.
	</P>
</section>
