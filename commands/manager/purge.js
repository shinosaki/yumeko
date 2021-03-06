module.exports.run = async function (client, message, args) {
	let messageCount = parseInt(args[0]) + 1;

	if (!messageCount) return message.reply(client.data.language.command_manager_purge_arg_empty);
	if (messageCount > 100) return message.reply(client.data.language.command_manager_purge_over);
	if (messageCount <= 0) return message.reply(client.data.language.command_manager_purge_less);
	
	message.channel.messages.fetch({
		"limit": messageCount
	}).then(function (messages) {
		message.channel.bulkDelete(messages, true);
		message.channel.send(client.data.language.command_manager_purge_clear_success.replace("%size", messages.size));
	});
};
	
module.exports.help = {
	"name": "purge",
	"description": "Delete a lot of messages",
	"usage": "purge <amount: 1 - 100>",
	"category": "manager",
	"aliases": ["clear", "messageDelete", "ลบข้อความ"],
	"permissions": ["SEND_MESSAGES", "MANAGE_MESSAGES"]
};