import type { RequestHandler } from './$types'
import { error } from '@sveltejs/kit'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const DELETE: RequestHandler = async ({ locals, request }) => {
	const body = await request.json()
	const session = await locals.getSession()

	if (!session) {
		throw error(401, 'Unauthorized')
	}

	const userId: string | undefined = session.user?.id

	if (!userId) {
		throw error(401, 'Unauthorized')
	}

	const todo = await prisma.todo.findUnique({
		where: {
			id: body.id
		}
	})

	if (todo?.authorId !== userId) {
		throw error(401, 'Unauthorized')
	}

	await prisma.todo.delete({
		where: {
			id: body.id
		}
	})

	return new Response('OK', {
		status: 200
	})
}
