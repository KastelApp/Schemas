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
import Encryption from '../../Classes/Encryption.js';

const UserSchema = new Schema({
	_id: {
		type: String,
		required: true,
	},

	Email: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},

	Username: {
		type: String,
		required: true,
		default: Encryption.encrypt('Ghost'),
		index: true,
	},

	Tag: {
		type: String,
		required: true,
		default: '0000',
		index: true,
	},

	Avatar: {
		type: String,
		required: false,
	},

	Password: {
		type: String,
		required: true,
	},

	PhoneNumber: {
		type: String,
		required: false,
	},

	TwoFaSecret: {
		type: String,
		required: false,
	},

	Ips: {
		type: Array,
		required: false,
	},

	Flags: {
		type: Number,
		required: false,
	},

	Guilds: [
		{
			type: String,
			ref: 'Guilds',
		},
	],

	Dms: [
		{
			type: String,
			required: false,
			ref: 'Dms',
		},
	],

	Bots: [
		{
			type: String,
			ref: 'Users',
		},
	],

	GlobalNickname: {
		type: String,
		required: false,
	},
});

export default model('Users', UserSchema);

export { UserSchema };
