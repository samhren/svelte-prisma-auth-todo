<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

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
			title: 'Auth'
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

<header class="w-screen flex flex-col items-center">
	<h1 class="font-bold text-3xl my-8 text-orange">Todo List</h1>
	<ul class="flex gap-6 text-white">
		{#each logos as logo (logo.id)}
			<li class="relative group">
				<p
					class="group-hover:opacity-100 opacity-0 transition-opacity absolute bg-slate px-2 py-1 top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] rounded-lg"
				>
					{logo.title}
				</p>
				<img class="h-16" src={logo.link} alt={logo.alt} />
			</li>
		{/each}
	</ul>
</header>
<slot />
