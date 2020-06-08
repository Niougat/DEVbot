const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message , args) => {

    const membre = message.mentions.members.first() || message.member;
    //if(!memebre) return message.channel.send(`Veuillez mentionner un utilisateur !`);


    const stats = new Discord.RichEmbed()
    .setColor("#5132b8")
    .setTitle(`Statistiques de l'utilisateur **${membre.user.tag}**`)
    .setThumbnail(membre.user.displayAvatarURL)
    .addField("> ID", membre.user.id)
    .addField("> Crée le :", moment.utc(membre.user.createdAt).format("LLLL"))
    .addField("> Jeu :", membre.user.presence.game ? membre.user.presence.game.name : `L'utilisateur ne joue pas actuellement`)
    .addField("> Rejoint le :", moment.utc(membre.joinedAt).format("LLLL"))

    message.channel.send(stats)

};

module.exports.help = {
    name: "stats"
}