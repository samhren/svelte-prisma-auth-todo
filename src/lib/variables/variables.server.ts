import { z } from 'zod';
import * as privateEnv from '$env/static/private';

/**
 * To use any type besides string, you need to use zod's `coerce` method.
 */

const schema = z.object({
	// Add your private env variables here
	GITHUB_ID: z.string().regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	GITHUB_SECRET: z.string().regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	AUTH_SECRET: z.string().regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	DATABASE_URL: z.string().regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	})
});

const parsed = schema.safeParse(privateEnv);

if (!parsed.success) {
	console.error(
		'❌ Invalid environment variables:',
		JSON.stringify(parsed.error.format(), null, 4)
	);
	process.exit(1);
}

export default parsed.data;
