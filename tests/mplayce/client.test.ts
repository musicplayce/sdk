require('dotenv').config();
import { assert } from 'chai';
import { describe, it } from 'mocha';

import MusicPlayceClient from '../../lib';

describe('MusicPlayceClient', function () {
	it('should authenticate with username & password and set the client token', async function () {
		const username = process.env.CLIENT_TEST_USERNAME as string;
		const password = process.env.CLIENT_TEST_PASSWORD as string;

		console.log('username', username);

		const client = await new MusicPlayceClient({ beta: true }).authenticate({
			username,
			password
		});

		assert.isDefined(client.token);
	});
});
