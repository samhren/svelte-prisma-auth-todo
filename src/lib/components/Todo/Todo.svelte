<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import type { Todo as TodoType } from '@prisma/client'

	const dispatch = createEventDispatcher()

	export let todo: TodoType

	const deleteTodo = () => {
		dispatch('deleteTodo', {
			id: todo.id
		})
	}
</script>

<div class="bg-stone-200 rounded-lg shadow-md group relative w-full h-14 flex items-center">
	<h3 class="pl-4 font-semibold">{todo.title}</h3>
	<button
		on:click={deleteTodo}
		class="ml-auto bg-red-500 h-full group-hover:opacity-100 flex items-center px-4 rounded-r-md opacity-0 transition-all duration-300 ease-in-out"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"
			><path
				fill="#F6F5F2"
				d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"
			/></svg
		>
	</button>
</div>
