import { IClient } from '../client';
import { IMusicPlayceNotificationsAPI, IMusicPlayceScheduleAPI } from './api';
import { MPlayceSDKOptions } from './config';

export * from './api';
export * from './config';
export abstract class IMusicPlayceService extends IClient {
	protected readonly options?: MPlayceSDKOptions;
	public readonly schedule: IMusicPlayceScheduleAPI;
	public readonly notifications: IMusicPlayceNotificationsAPI;

	protected constructor(options?: MPlayceSDKOptions) {
		super();
		this.options = options;
	}

	public abstract authenticate(credentials?: {
		username: string;
		password: string;
	}): Promise<IMusicPlayceService>;
}
