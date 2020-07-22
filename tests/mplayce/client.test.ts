import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

import MusicPlayceClient from '../../lib';

describe('MusicPlayceClient', function () {
	it('should authenticate with username & password and set the client token', async function () {
		const username = 'marcosvro';
		const password = '12345678';

		const client = await new MusicPlayceClient({ beta: true }).authenticate({
			username,
			password
		});

		assert.isDefined(client.token);
	});
});
