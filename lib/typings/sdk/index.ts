import { IClient } from '../client';
import { IMusicPlayceNotificationsAPI, IMusicPlayceScheduleAPI } from './api';
import { MPlayceSDKOptions } from './config';

export * from './api';
export * from './config';
export abstract class IMusicPlayceClient extends IClient {
	protected readonly options?: MPlayceSDKOptions;
	public readonly apiVersion: '1.0' | '2.0' = '1.0';
	public readonly schedule: IMusicPlayceScheduleAPI;
	public readonly notifications: IMusicPlayceNotificationsAPI;

	protected constructor(options?: MPlayceSDKOptions) {
		super();
		this.options = options;
	}

	public abstract authenticate(credentials?: {
		username: string;
		password: string;
	}): Promise<IMusicPlayceClient>;
}
