const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Je ne peut pas te laisser faire sa !`);

    var user = message.guild.member(message.mentions.users.first());

    if(!user) return message.channel.send("Utilisez la commande de cette manière : `?kick | Utilisateur | Raison` ");

    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission !`);

    var tempBanTime = args[1];

    var reason = args.join(" ").slice(22);

    if(!reason) return message.channel.send(`Une raison est attendu !`);

        await message.guild.member(user).kick(reason);

        message.channel.send(`${user} a été kick pour : **${reason}**`)

}

module.exports.help = {
    name: "kick"
};