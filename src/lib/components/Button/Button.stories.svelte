<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<Button {...args}>Click me</Button>
</Template>

<Story name="Button" id="button" />
