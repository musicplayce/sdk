import { AxiosResponse } from 'axios';
import { IClient } from '../../client';

import { MusicPlayce } from '../../mplayce';

export abstract class IMusicPlayceNotificationsAPI {
	protected readonly _client: IClient;
	protected readonly _url: string;

	constructor(client: IClient, url: string) {
		this._url = url;
		this._client = client;
	}

	public abstract create(
		data: MusicPlayce.Models.CreateNotification
	): Promise<AxiosResponse<any>>;
	public abstract delete(id: string): Promise<AxiosResponse<any>>;
	public abstract list(): Promise<AxiosResponse<any>>;

	public abstract findById(id: string): Promise<AxiosResponse<any>>;
	public abstract update(
		id: string,
		data: MusicPlayce.Models.Notification
	): Promise<AxiosResponse<any>>;
}
