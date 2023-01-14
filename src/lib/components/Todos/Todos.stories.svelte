<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Todos from './Todos.svelte'
</script>

<Meta title="Components/Todos" component={Todos} />

<Template let:args>
	<Todos {...args} />
</Template>

<Story name="Todos" id="todos" />
