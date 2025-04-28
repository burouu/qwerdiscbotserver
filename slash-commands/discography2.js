const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const Embed = new EmbedBuilder()
    .setColor('#06AB7C')
    .setImage('https://i.imgur.com/zLsscWk.png')
    .setTitle('Play We Dew')
    .setDescription(`5th OST\n\n**Release Date: April 12th, 2025**

**1 - [Play We Dew](https://www.youtube.com/watch?v=8IMPpF2tIWI)**    
    

    `)
    .addFields(
        { name: 'Song Link', value: '[Youtube](https://www.youtube.com/watch?v=8IMPpF2tIWI)'}
    )
    .setFooter(
        { text: 'QWER x Mountain Dew'}
    )
    
module.exports = {
    data: new SlashCommandBuilder()
        .setName("discography2")
        .setDescription("discography 2"),

    async execute(interaction) {
        await interaction.reply({ embeds: [Embed] })
    }
}