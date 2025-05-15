
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const Embed3 = new EmbedBuilder()
	.setColor("#5abddf")
	.setTitle('Hina (히나 profile)')
    .setDescription('Jang Na Young (장나영)')
	.setThumbnail('https://i.pinimg.com/736x/4a/07/f8/4a07f842e0e922fb58e830eff34af865.jpg')
	.addFields(
		{ name: 'Birthday', value: 'January 30, 2001' },
        { name: 'Representative Letter', value: 'E'},
		{ name: 'Position', value: 'Guitarist, Keyboardist, Maknae' },
		{ name: 'Facts', value: '• Hina was the third member to be added.\n• Her name on social media is Nyangnyongnyeongnyang.\n• Her nickname is Nyangnyongie.\n• Hina and Magenta live on the same floor.\n• Her TikTok account has over 4 million followers.'},
	)
	.addFields({ name: 'Links', value: 'Instagram: [i_am_young22](https://www.instagram.com/i_am_young22/) / [joinnutyellow](https://www.instagram.com/joinnutyellow/)\nX: [hapycb](https://x.com/hapycb) \nTiktok: [i_am_young22](https://www.tiktok.com/@i_am_young22)\nTwitch: [h1nadesu](https://www.twitch.tv/h1nadesu)\nYoutube: [hapycb](https://www.youtube.com/@hapycb) / [hinachan9100](https://www.youtube.com/@hinachan9100)', inline: true })
	.setImage('https://scontent-gru1-1.cdninstagram.com/v/t51.29350-15/459036590_1244743786534957_3238531529476543265_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=l35EsJPurUgQ7kNvgFO6uqT&_nc_gid=f7a5fe40f7f645b0ac7e9510148827fd&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzQ1NTM2NDk4MTM3Njg5Njg1Nw%3D%3D.3-ccb7-5&oh=00_AYByID1jssP7YKitAxbVZLdAu49ajyJdhEnf_B7FjkefAQ&oe=6714FBC5&_nc_sid=fc8dfb')
    

module.exports = {  
    data:new SlashCommandBuilder()
        .setName("hina")
        .setDescription("send members profile")
		.setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [ Embed3 ] }) 
    }
}
