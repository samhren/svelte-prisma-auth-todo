<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Todo from './Todo.svelte'
</script>

<Meta title="Components/Todo" component={Todo} />

<Template let:args>
	<Todo {...args} />
</Template>

<Story name="Todo" id="todo" />
