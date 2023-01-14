<script lang="ts">
	import Todo from '../Todo/Todo.svelte'
	import type { Todo as TodoType } from '@prisma/client'

	export let todos: TodoType[] = []
</script>

{#each todos as todo, i (todo.id)}
	{#if i == 0}
		<div class="mb-4">
			<Todo on:deleteTodo {todo} />
		</div>
	{:else if i == todos.length - 1}
		<div class="mt-4">
			<Todo on:deleteTodo {todo} />
		</div>
	{:else}
		<div class="my-4">
			<Todo on:deleteTodo {todo} />
		</div>
	{/if}
{/each}
