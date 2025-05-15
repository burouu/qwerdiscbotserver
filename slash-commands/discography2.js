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

const Embed2 = new EmbedBuilder()
    .setColor('#FD7DCC')
    .setImage('https://i.imgur.com/kuI7LXs.png')
    .setTitle('Discord (Japanese Ver.)')
    .setDescription(`1st Japanese Ver. Single\n\n\**Release Date: May 10th, 2025**
        
**1 - [Discord (Japanese Ver.)](https://www.youtube.com/watch?v=FOP5Y-OJB1I)**


    `)
    .addFields(
        { name: 'Song Links', value: '[Spotify](https://open.spotify.com/intl-pt/album/5FOQ5cbUbJZ4U2Qn5o0yZG)\n[Apple Music](https://music.apple.com/ph/album/discord-japanese-ver-single/1811944016)\n[Youtube Music](https://music.youtube.com/playlist?list=OLAK5uy_kJrfQJb9o-Pe5ZTq51GihDOfk4n83Qzho)\n[Deezer](https://www.deezer.com/br/album/749802801)' }
    )
    .setFooter(
        { text: 'Discord JP Version'}
    )
    
module.exports = {
    data: new SlashCommandBuilder()
        .setName("discography2")
        .setDescription("discography 2")
        .setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [Embed, Embed2] })
    }
}