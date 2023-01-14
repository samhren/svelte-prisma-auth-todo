<script lang="ts">
	import Icon from '../Icon/Icon.svelte';

	const logos = [
		{
			id: 0,
			link: '/logos/svelte.png',
			alt: 'Svelte Logo',
			title: 'SvelteKit'
		},
		{
			id: 1,
			link: '/logos/tailwind.png',
			alt: 'Tailwind Logo',
			title: 'TailwindCSS'
		},
		{
			id: 2,
			link: '/logos/postgresql.png',
			alt: 'PostgreSQL Logo',
			title: 'PostgreSQL'
		},
		{
			id: 3,
			link: '/logos/auth.png',
			alt: 'SvelteKit Auth Logo',
			title: 'AuthJS'
		},
		{
			id: 4,
			link: '/logos/prisma.png',
			alt: 'Prisma Logo',
			title: 'Prisma'
		},
		{
			id: 5,
			link: '/logos/storybook.png',
			alt: 'Storybook Logo',
			title: 'Storybook'
		}
	];
</script>

<ul class="flex gap-6 text-white">
	{#each logos as logo (logo.id)}
		<Icon {logo} />
	{/each}
</ul>
