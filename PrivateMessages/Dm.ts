/* !
 *   ██╗  ██╗ █████╗ ███████╗████████╗███████╗██╗
 *   ██║ ██╔╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝██║
 *  █████╔╝ ███████║███████╗   ██║   █████╗  ██║
 *  ██╔═██╗ ██╔══██║╚════██║   ██║   ██╔══╝  ██║
 * ██║  ██╗██║  ██║███████║   ██║   ███████╗███████╗
 * ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚══════╝
 * Copyright(c) 2022-2023 DarkerInk
 * GPL 3.0 Licensed
 */

import { model, Schema } from 'mongoose';

const DmSchema = new Schema({
	_id: {
		type: String,
		required: true,
	},
	
	Recipients: [
		{
			User: {
				type: String,
				required: true,
				ref: 'Users',
			},
			Flags: {
				type: Number,
				required: true,
			}
		}
	],
	
	Channel: {
		type: String,
		required: true,
		ref: 'Channels',
	},
	
	Flags: {
		type: Number,
		required: true,
		default: 0,
	}
});

export default model('Dm', DmSchema);

export { DmSchema };
