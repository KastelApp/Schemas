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

import BanSchema from './Guilds/Ban.js';
import ChannelSchema from './Guilds/Channel.js';
import EmojiSchema from './Guilds/Emoji.js';
import GuildSchema from './Guilds/Guild.js';
import GuildMemberSchema from './Guilds/GuildMember.js';
import InviteSchema from './Guilds/Invite.js';
import PermissionsOveridesSchema from './Guilds/PermissionsOverides.js';
import RoleSchema from './Guilds/Role.js';
import WebhookSchema from './Guilds/Webhook.js';
import FileSchema from './Misc/File.js';
import MessageSchema from './Misc/Message.js';
import SettingSchema from './Misc/Settings.js';
import VerifcationLinkSchema from './Misc/VerificationLinks.js';
import DmSchema from './PrivateMessages/Dm.js';
import GroupchatSchema from './PrivateMessages/GroupChat.js';
import FriendSchema from './Users/Friend.js';
import GiftSchema from './Users/Gift.js';
import UserSchema from './Users/User.js';

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

export { default as BanSchema } from './Guilds/Ban.js';
export { default as ChannelSchema } from './Guilds/Channel.js';
export { default as GuildMemberSchema } from './Guilds/GuildMember.js';
export { default as GuildSchema } from './Guilds/Guild.js';
export { default as InviteSchema } from './Guilds/Invite.js';
export { default as RoleSchema } from './Guilds/Role.js';
export { default as WebhookSchema } from './Guilds/Webhook.js';
export { default as FileSchema } from './Misc/File.js';
export { default as MessageSchema } from './Misc/Message.js';
export { default as DmSchema } from './PrivateMessages/Dm.js';
export { default as GroupchatSchema } from './PrivateMessages/GroupChat.js';
export { default as FriendSchema } from './Users/Friend.js';
export { default as GiftSchema } from './Users/Gift.js';
export { default as UserSchema } from './Users/User.js';
export { default as SettingSchema } from './Misc/Settings.js';
export { default as PermissionsOveridesSchema } from './Guilds/PermissionsOverides.js';
export { default as EmojiSchema } from './Guilds/Emoji.js';
export { default as VerifcationLinkSchema } from './Misc/VerificationLinks.js';
