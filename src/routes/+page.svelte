<script lang="ts">
	import { page } from '$app/stores'
	import Login from '$lib/components/Login/Login.svelte'
	import Todos from '$lib/components/Todos/Todos.svelte'
	import type { Todo } from '@prisma/client'
	import type { PageData } from './$types'

	export let data: PageData

	let todos: Todo[] = data.todos

	const deleteTodo = async (event: { detail: { id: any } }) => {
		const id = event.detail.id
		const response = await fetch(`/`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id })
		})

		if (response.ok) {
			todos = todos.filter((todo) => todo.id !== id)
		}
	}
</script>

{#if $page.data.session}
	<div class="w-2/3 mx-auto text-center mt-8">
		<h1 class="text-3xl font-semibold my-6">Todos</h1>
		{#if todos.length === 0}
			<p class="text-peach font-semibold">No todos yet</p>
		{/if}
		<Todos on:deleteTodo={deleteTodo} {todos} />
	</div>
{:else}
	<Login />
{/if}
