const Discord = require("discord.js");
const embedColor = '#50F150'

module.exports = {
    name: 'avatar',
    description: 'Obtén el avatar de alguien más o el tuyo.',
    execute(message, args) {
        if (!message.mentions.users.size) {
            const embed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png',dynamic:true}))
                .setImage(message.author.displayAvatarURL({format:'png',dynamic:true}))

            message.channel.send(embed);
        } else {
            const taggedUser = message.mentions.users.first();

            const embed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setAuthor(taggedUser.username, taggedUser.displayAvatarURL({format:'png',dynamic:true}))
                .setImage(taggedUser.displayAvatarURL({format:'png',dynamic:true}))

            message.channel.send(embed);
        };
    },
};