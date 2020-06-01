const Discord = require(`discord.js`);
const client = new Discord.Client();

client.login("NzE0NDQ1MzgxNDM3NjIwMjk2.XtFGdg.zQarEu23vxJC_XsuKFWeWFWSPhA");

var prefix = ("a!");

client.on("message", (message) => {
    if(message.content === "TG") {
        message.channel.send("Ferme ta gueule connard");
    }

    if(message.content === prefix + "help"){
        message.channel.send("Veux tu de l'aide?")
    }
    
});
