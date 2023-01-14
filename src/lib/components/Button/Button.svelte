<script lang="ts">
	export let bgColor: 'white' | 'peach' | 'orange' | 'gray' | 'slate' = 'slate';
	export let textColor: 'white' | 'peach' | 'orange' | 'gray' | 'slate' = 'white';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled: boolean = false;

	let customArgs: string = '';

	if (size === 'sm') {
		customArgs += 'px-2 py-1 text-sm ';
	} else if (size === 'md') {
		customArgs += 'px-4 py-2 text-base ';
	} else if (size === 'lg') {
		customArgs += 'px-6 py-3 text-lg ';
	}

	if (disabled) {
		customArgs += 'opacity-50 cursor-not-allowed ';
	}
</script>

<button
	class="bg-{bgColor} text-{textColor} {customArgs} rounded-xl inline-block hover:shadow-lg hover:brightness-90 font-semibold"
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:focus
>
	<slot />
</button>
