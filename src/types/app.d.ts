import { DefaultSession } from '@auth/core'
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
		} & DefaultSession['user']
	}
}

declare module '@auth/core/types' {
	interface Session {
		user: {
			id: string
		} & DefaultSession['user']
	}
}

export {}
