const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Je ne peut pas te laisser faire sa !`);

    var user = message.guild.member(message.mentions.users.first());

    if(!user) return message.channel.send("Utilisez la commande de cette manière : `?tempban | Utilisateur | Durée | Raison` ");

    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission !`);

    var tempBanTime = args[1];

    var reason = args.join(" ").slice(22);

    if(!reason) return message.channel.send(`Une raison est attendu !`);

    if(ms(tempBanTime)) {

        await message.guild.member(user).ban(reason);

        message.channel.send(`${user} est ban pour : **${reason}**`);

        setTimeout(function(){

            message.guild.unban(user.id);

            message.channel.send(`${user} est unban`);
        

        }, ms(tempBanTime));

    }else{
        return message.channel.send(`Entrer une heure valide !`);
    }
}

module.exports.help = {
    name: "tban"
};