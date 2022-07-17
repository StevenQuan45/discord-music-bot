const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Source Code")
    .setStyle("LINK")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/DecYscXxpE")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Mystic Music', 'https://cdn.discordapp.com/avatars/910792227591163945/3bb282a8f43c062a8490222a96d3dde3.webp?size=1024')
            .setThumbnail('https://cdn.discordapp.com/avatars/910792227591163945/3bb282a8f43c062a8490222a96d3dde3.webp?size=1024')
            .setColor('#303236')
            .addField('Creator', '[Jarvis ツ#0001](https://www.youtube.com/channel/UCZy4AQHkLgjZ7cgMQKfFh1Q)', true)
            .addField('Made Using', 'Node.js <:js:920277535621808129>', true)
            .addField('Hosting Cost :(', '$10 Per Month', true)
            .addField('\u200b',
                `Mystic Music is a 24/7 Music Bot`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}