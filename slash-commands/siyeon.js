
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
	.setColor("#c8d88a")
	.setTitle('Siyeon (시연) profile')
	.setDescription('Lee Siyeon (이시연)')
	.setThumbnail('https://i.pinimg.com/736x/bb/76/87/bb76879c4c3cc850665cdd145cee840e.jpg')
	.addFields(
		{ name: 'Birthday', value: 'May 16, 2000' },
        { name: 'Representative Letter', value: 'R'},
		{ name: 'Position', value: 'Main Vocalist, Guitarist'},
		{ name: 'Facts', value: '• Siyeon was the forth and final member to be added.\n• Her nickname is Siyomin.\n•Siyeon joined the J-Pop idol group NMB48 Team M in August 2021.\n• Siyeon graduated from NMB48 on August 8, 2023 after two years with the group.\n• She was a member of a busking dance team called Napul Naful.'},
	)
	.addFields({ name: 'Links', value: 'Instagram: [siyo.co.kr](https://www.instagram.com/siyo.co.kr/)\nTiktok: [siyomin___](https://www.tiktok.com/@siyomin___)\nX: [@siyo_min](https://x.com/siyo_min)', inline: true })
	.setImage('https://scontent-gru2-2.cdninstagram.com/v/t51.29350-15/459615596_874560530848674_537665773968559872_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=106&_nc_ohc=fQs4BblllnUQ7kNvgEQtx3q&_nc_gid=2be9f92f7dc74490b3785a8564d5e354&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ1NjA4OTY4MTg3ODkzODI2Ng%3D%3D.3-ccb7-5&oh=00_AYDqZsPZuK_yZsnXnGfDAomgMoaMi1pCUAW-9tGymzwO4A&oe=671507DE&_nc_sid=22de04')


module.exports = {  
    data:new SlashCommandBuilder()
        .setName("siyeon")
        .setDescription("send members profile"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] }) 
    }
}
