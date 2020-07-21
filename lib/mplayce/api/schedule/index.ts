import { AxiosResponse } from 'axios';
import {
	IClient,
	MusicPlayce,
	IMusicPlayceScheduleAPI
} from '../../../typings';

export class MusicPlayceScheduleAPI extends IMusicPlayceScheduleAPI {
	constructor(client: IClient) {
		super(client, '/v1/schedule');
	}

	public async append(
		data: MusicPlayce.Models.AppendScedule
	): Promise<AxiosResponse<any>> {
		return await this._client.post<any, MusicPlayce.Models.AppendScedule>(
			this._url + '/append',
			data
		);
	}
}
