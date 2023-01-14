<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';

	import Button from '../Button/Button.svelte';
</script>

<div class="flex flex-col items-center my-12">
	<p class="text-peach font-semibold">Please sign in to continue</p>
	<h1 class="text-slate font-bold text-4xl">Not Logged In</h1>

	<div class="mt-8 flex flex-col gap-3">
		<Button on:click={() => signIn('github')}>
			<div class="flex justify-center items-center gap-3 py-1 px-1">
				<img src="/logos/gh_white.png" alt="Github" class="h-6" />
				Login
			</div>
		</Button>
		<Button on:click={() => signIn('google')}>
			<div class="flex justify-center items-center gap-3 py-1 px-1">
				<img src="/logos/google.png" alt="Google" class="h-6" />
				Login
			</div>
		</Button>
	</div>
</div>
