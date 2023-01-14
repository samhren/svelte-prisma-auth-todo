/* eslint-disable */
// @ts-nocheck
import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from '@auth/core/providers/github'
import env from '$lib/variables/variables.server'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const handle = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [GitHub({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET })],
	callbacks: {
		session({ session, token, user }) {
			if (session?.user) {
				session.user.id = user.id
			}
			return session
		}
	}
	/**
	 * CUSTOM PAGES FOR AUTH
	 */
	// pages: {
	// 	signIn: '/auth/signin',
	// 	signOut: '/auth/signout',
	// 	error: '/auth/error', // Error code passed in query string as ?error=
	// 	verifyRequest: '/auth/verify-request', // (used for check email message)
	// 	newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
	// }
})
