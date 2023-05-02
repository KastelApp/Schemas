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

import BanSchema from './Guilds/Ban';
import ChannelSchema from './Guilds/Channel';
import EmojiSchema from './Guilds/Emoji';
import GuildSchema from './Guilds/Guild';
import GuildMemberSchema from './Guilds/GuildMember';
import InviteSchema from './Guilds/Invite';
import PermissionsOveridesSchema from './Guilds/PermissionsOverides';
import RoleSchema from './Guilds/Role';
import WebhookSchema from './Guilds/Webhook';
import FileSchema from './Misc/File';
import MessageSchema from './Misc/Message';
import SettingSchema from './Misc/Settings';
import VerifcationLinkSchema from './Misc/VerificationLinks';
import DmSchema from './PrivateMessages/Dm';
import GroupchatSchema from './PrivateMessages/GroupChat';
import FriendSchema from './Users/Friend';
import GiftSchema from './Users/Gift';
import UserSchema from './Users/User';



export default {
	BanSchema,
	ChannelSchema,
	GuildMemberSchema,
	GuildSchema,
	InviteSchema,
	RoleSchema,
	WebhookSchema,
	FileSchema,
	MessageSchema,
	DmSchema,
	GroupchatSchema,
	FriendSchema,
	GiftSchema,
	UserSchema,
	SettingSchema,
	PermissionsOveridesSchema,
	EmojiSchema,
	VerifcationLinkSchema,
};

export { default as BanSchema } from './Guilds/Ban';
export { default as ChannelSchema } from './Guilds/Channel';
export { default as GuildMemberSchema } from './Guilds/GuildMember';
export { default as GuildSchema } from './Guilds/Guild';
export { default as InviteSchema } from './Guilds/Invite';
export { default as RoleSchema } from './Guilds/Role';
export { default as WebhookSchema } from './Guilds/Webhook';
export { default as FileSchema } from './Misc/File';
export { default as MessageSchema } from './Misc/Message';
export { default as DmSchema } from './PrivateMessages/Dm';

export {default as GroupchatSchema} from './PrivateMessages/GroupChat';
export {default as FriendSchema} from './Users/Friend';
export {default as GiftSchema} from './Users/Gift';
export {default as UserSchema} from './Users/User';
export {default as SettingSchema} from './Misc/Settings';
export {default as PermissionsOveridesSchema} from './Guilds/PermissionsOverides';
export {default as EmojiSchema} from './Guilds/Emoji';
export {default as VerifcationLinkSchema} from './Misc/VerificationLinks';