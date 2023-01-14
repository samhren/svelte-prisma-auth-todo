import { z } from 'zod';
import * as publicEnv from '$env/static/public';

/**
 * To use any type besides string, you need to use zod's `coerce` method.
 */

const schema = z.object({
	// Add your public env variables here
});

const parsed = schema.safeParse(publicEnv);

if (!parsed.success) {
	console.error(
		'❌ Invalid environment variables:',
		JSON.stringify(parsed.error.format(), null, 4)
	);
	process.exit(1);
}

export default parsed.data;
