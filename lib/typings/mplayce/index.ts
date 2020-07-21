export namespace MusicPlayce {
	export namespace Models {
		export interface Notification {
			_id: string;
			title: string;
			subtitle: string;
			body: string;
			id_profile: string;
			id_post: string;
			icon: string;
			intent: string;
			datetime_created: Date;
			datetime_updated: Date;
			datetime_delivered: Date | string;
			deleted: boolean;
			unread: boolean;
			pinned: boolean;
		}

		export interface CreateNotification {
			title: string;
			subtitle: string;
			body: string;
			id_profile: string;
			id_post: string;
			icon: string;
			intent: string;
			datetime_created: Date;
			datetime_updated: Date;
			unread: boolean;
			pinned: boolean;
		}

		export interface Schedule {
			type: string;
			name: string;
			id_profile: string;
			datetime_dispatch: Date;
			params: any;
			snsTopic?: string;
		}

		export interface AppendScedule {
			type: string;
			name: string;
			id_profile: string;
			params: any;
			snsTopic?: string;
			datetime_dispatch?: Date;
			days?: number;
			hours?: number;
			minutes?: number;
		}
	}
}
