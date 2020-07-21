import { AxiosResponse } from 'axios';
import { IClient } from '../../client';

import { MusicPlayce } from '../../mplayce';

export abstract class IMusicPlayceScheduleAPI {
	protected readonly _client: IClient;
	protected readonly _url: string;

	constructor(client: IClient, url: string) {
		this._url = url;
		this._client = client;
	}

	public abstract append(
		data: MusicPlayce.Models.AppendScedule
	): Promise<AxiosResponse<any>>;
}
