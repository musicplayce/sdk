import qs from 'qs';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const useRateLimiter = require('axios-rate-limit');

import { MusicPlayceNotificationsAPI, MusicPlayceScheduleAPI } from './api';
import { IMusicPlayceClient, MPlayceSDKOptions } from '../typings';

export class MusicPlayceClient extends IMusicPlayceClient {
	private _token?: string = undefined;
	private readonly _baseURL: string;
	private readonly _http: AxiosInstance;

	public readonly notifications: MusicPlayceNotificationsAPI;
	public readonly schedule: MusicPlayceScheduleAPI;

	constructor(options?: MPlayceSDKOptions) {
		super(options);

		this._baseURL =
			this.options && this.options.beta
				? `https://api-beta.musicplayce.com`
				: 'https://api.musicplayce.com';

		this._http = useRateLimiter(
			axios.create({
				baseURL: this._baseURL,
				headers: {
					'Content-Type': 'application/json'
				}
			}),
			{ maxRequests: 50, perMilliseconds: 10000 }
		);

		this.schedule = new MusicPlayceScheduleAPI(this);
		this.notifications = new MusicPlayceNotificationsAPI(this);
	}

	private withAuth(): AxiosRequestConfig {
		return {
			headers: {
				Authorization: `Bearer ${this._token}`
			}
		};
	}

	public async authenticate(credentials: {
		username: string;
		password: string;
	}) {
		try {
			const { data } = await axios.post<any>(
				this._baseURL + '/v1/auth/signin',
				{
					username: credentials.username,
					password: credentials.password
				}
			);

			this._token = data.jwt.token;
		} catch (error) {
			console.dir(error);
		}

		return this;
	}

	public get = async <ResponseData, Query>(endpoint: string, query?: Query) => {
		return await this._http.get<ResponseData>(
			query ? endpoint + `?${qs.stringify(query)}` : endpoint,
			this.withAuth()
		);
	};

	public put = async <ResponseData, Data>(endpoint: string, data: Data) => {
		return await this._http.put<ResponseData>(endpoint, data, this.withAuth());
	};

	public post = async <ResponseData, Data>(endpoint: string, data: Data) => {
		return await this._http.post<ResponseData>(endpoint, data, this.withAuth());
	};

	public delete = async <ResponseData, Query>(
		endpoint: string,
		query?: Query
	) => {
		return await this._http.delete<ResponseData>(
			query ? endpoint + `?${qs.stringify(query)}` : endpoint,
			this.withAuth()
		);
	};
}
