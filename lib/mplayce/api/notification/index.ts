import { AxiosResponse } from 'axios';
import {
	IClient,
	MusicPlayce,
	IMusicPlayceNotificationsAPI
} from '../../../typings';

export class MusicPlayceNotificationsAPI extends IMusicPlayceNotificationsAPI {
	constructor(client: IClient) {
		super(client, '/v1/notification');
	}

	public async create(
		data: MusicPlayce.Models.CreateNotification
	): Promise<AxiosResponse<any>> {
		return await this._client.post<any, MusicPlayce.Models.CreateNotification>(
			this._url,
			data
		);
	}

	public async delete(id: string): Promise<AxiosResponse<any>> {
		return await this._client.delete<any, any>(this._url + `/${id}`);
	}

	public async list(): Promise<AxiosResponse<any>> {
		return await this._client.get<any, any>(this._url);
	}

	public async findById(id: string): Promise<AxiosResponse<any>> {
		return await this._client.get<any, any>(this._url + `/${id}`);
	}

	public async update(
		id: string,
		data: MusicPlayce.Models.Notification
	): Promise<AxiosResponse<any>> {
		return await this._client.put<any, MusicPlayce.Models.Notification>(
			this._url + `/${id}`,
			data
		);
	}
}
