require('dotenv').config();
import { assert } from 'chai';
import { describe, it } from 'mocha';

import MusicPlayceClient from '../../lib';

describe('MusicPlayceClient', function () {
	it('should authenticate with username & password and set the client token', async function () {
		console.log(
			'process.env.CLIENT_TEST_USERNAME',
			process.env.CLIENT_TEST_USERNAME
		);
		const username = process.env.CLIENT_TEST_USERNAME;
		const password = process.env.CLIENT_TEST_PASSWORD;

		const client = await new MusicPlayceClient({ beta: true }).authenticate({
			username,
			password
		});

		assert.isDefined(client.token);
	});
});
