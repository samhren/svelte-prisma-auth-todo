<script lang="ts">
	import Button from '../Button/Button.svelte'
	import Icons from '../Icons/Icons.svelte'
	import { page } from '$app/stores'
	import { signOut } from '@auth/sveltekit/client'
</script>

<header class="w-screen flex flex-col items-center relative">
	<h1 class="font-bold text-3xl my-8 text-orange">Todo List</h1>
	{#if $page.data.session}
		<div class="absolute top-7 left-7">
			<img
				src={$page.data.session.user?.image}
				alt={$page.data.session.user?.name}
				class="h-12 rounded-full shadow-lg"
			/>
		</div>

		<div class="absolute top-7 right-7">
			<Button
				on:click={() => {
					signOut()
				}}>Logout</Button
			>
		</div>
	{/if}
	<Icons />
</header>
