import type { PageServerLoad } from './$types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.getSession()

	if (!session) {
		return {
			todos: []
		}
	}

	const userId: string | undefined = session.user?.id

	if (!userId) {
		return {
			todos: []
		}
	}

	const todos = await prisma.todo.findMany({
		where: {
			authorId: userId
		}
	})

	return {
		todos
	}
}
