import { AxiosResponse } from 'axios';

export abstract class IClient {
	public get: <R, Q>(endpoint: string, query?: Q) => Promise<AxiosResponse<R>>;
	public put: <R, D>(endpoint: string, data: D) => Promise<AxiosResponse<R>>;
	public post: <R, D>(endpoint: string, data: D) => Promise<AxiosResponse<R>>;
	public delete: <R, Q>(
		endpoint: string,
		query?: Q
	) => Promise<AxiosResponse<R>>;
}
