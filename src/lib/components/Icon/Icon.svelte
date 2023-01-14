<script lang="ts">
	export let logo: {
		title: string
		link: string
		alt: string
	}
</script>

<li class="relative group">
	<p
		class="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out absolute bg-slate px-2 py-1 top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] rounded-lg"
	>
		{logo.title}
	</p>
	<img class="h-16" src={logo.link} alt={logo.alt} />
</li>
