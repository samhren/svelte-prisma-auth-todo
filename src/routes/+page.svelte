<script lang="ts">
	import { page } from '$app/stores';
	import Login from '$lib/components/Login/Login.svelte';

	console.log($page.data.session);
</script>

{#if $page.data.session}
	Signed IN!
{:else}
	<Login />
{/if}
