module.exports.run = async function (client, message, args) {
    message.channel.send({
        "embed": {
            "title": client.data.language.command_system_uptime_embed_title,
            "description": "```" + duration(client.uptime) + "```",
            "color": 14684245
        }
    });

    function duration(ms) {
        let sec = Math.floor((ms / 1000) % 60).toString();
        let min = Math.floor((ms / (1000 * 60)) % 60).toString();
        let hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
        let days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
        return  days.padStart(1, "0") + client.data.language.command_system_uptime_create_data_day +
                hrs.padStart(2, "0") + client.data.language.command_system_uptime_create_data_hour +
                min.padStart(2, "0") + client.data.language.command_system_uptime_create_data_minute +
                sec.padStart(2, "0") + client.data.language.command_system_uptime_create_data_second;
    }
};

module.exports.help = {
    "name": "uptime",
    "description": "Displays the bots current uptime!",
    "usage": "uptime",
    "category": "system",
    "aliases": ["upTime", "upTimes", "uptimes", "เวลา"],
    "permissions": "SEND_MESSAGES"
};