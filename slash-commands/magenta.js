
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed2 = new EmbedBuilder()
	.setColor('#d285a7')
	.setTitle('Magenta (마젠타) profile')
	.setDescription('Lee Ahee (이아희)')
	.setThumbnail('https://i.pinimg.com/736x/ec/4f/76/ec4f76efa3ba78243cb7c0e3b5dba6a4.jpg')
	.addFields(
		{ name: 'Birthday', value: 'June 2, 1997' },
        { name: 'Representative Letter', value: 'W'},
		{ name: 'Position', value: 'Bassist' },
		{ name: 'Facts', value: '• Magenta was the second member to be added.\n• She was born in Pohang, North Gyeongsang, South Korea.\n• Her favorite color is magenta, which is why she chose it as her stage name.\n• Her nickname is Genta, and Chodan calls her it a lot.\n• Magenta and Hina live on the same floor.\n• Her fandom name is Hotteok.'},
	)
	.addFields({ name: 'Links', value: 'Instagram: [magenta_6262](https://www.instagram.com/magenta_6262/)\nTiktok: [magenta6262](https://www.tiktok.com/@magenta6262)\nTwitch: [magenta62](https://www.twitch.tv/magenta62)\nYoutube: [magenta62](https://www.youtube.com/@magenta62)', inline: true })
	.setImage('https://scontent-gru1-2.cdninstagram.com/v/t51.29350-15/459280148_1261429911883774_4875752365019880542_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=110&_nc_ohc=S3anwV5wkDIQ7kNvgE0tzCA&_nc_gid=1e4a2eacffd94ddaac8927d545fecb71&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ1NDY0NjgzNDMyMzU5NjIzMQ%3D%3D.3-ccb7-5&oh=00_AYDkhe8xUoJitppDZY6uNuOmCE-nqe-vMB1gBAYbH7XF1w&oe=67150399&_nc_sid=22de04')
    

module.exports = {  
    data:new SlashCommandBuilder()
        .setName("magenta")
        .setDescription("send members profile"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed2] }) 
    }
}
