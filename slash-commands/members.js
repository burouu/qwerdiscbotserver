const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const Embed1 = new EmbedBuilder()
    .setColor('#ffffff')
    .setTitle('Chodan (쵸단) profile')
    .setDescription('Hong Jihye (홍지혜)')
    .setThumbnail('https://i.pinimg.com/736x/ab/7d/2c/ab7d2cf054632bb14e2c1405737ed92a.jpg')
    .addFields(
        { name: 'Birthday', value: 'November 1, 1998' },
        { name: 'Representative Letter', value: 'Q'},
        { name: 'Position:', value: 'Leader, Drummer, Sub-Vocalist' },
        { name: 'Facts', value: '• Chodan was the first member to be added.\n• She received her education at Sungshin Women’s University as a drum major.\n• Chodan and Siyeon live on the same floor.\n• Chodan has loved football since she was young.\n• Her favorite football club is Manchester United.' },
	)
	.addFields({ name: 'Links', value: 'Instagram: [chodan._.](https://www.instagram.com/choda._.n/)\nTiktok: [chodan__](https://www.tiktok.com/@chodan__)\nTwitch: [chodan_](https://twitch.tv/chodan_)\nYoutube: [chodan_](https://www.youtube.com/@chodan_)', inline: true })
    .setImage('https://kprofiles.com/wp-content/uploads/2023/08/CHODAN-534x800.jpg')

    const Embed2 = new EmbedBuilder()
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
	.addFields({ name: 'Links', value: 'Instagram: [magenta_6262](https://www.instagram.com/magenta_6262/)\nTiktok: [magenta6262](https://www.tiktok.com/@magenta6262)\nTwitch: [magenta62](https://www.twitch.tv/magenta62)\nYoutube: [마젠타](https://youtube.com/channel/UCADa1FgR3ZsEMG8S5jQQdgQ?si=uwM8o49qSvvXsbxU)', inline: true })
	.setImage('https://kprofiles.com/wp-content/uploads/2023/08/MAGENTA-534x800.jpg')

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
	.addFields({ name: 'Links', value: 'Instagram: [i_am_young22](https://www.instagram.com/i_am_young22/) / [hapyhinahehe](https://www.instagram.com/hapyhinahehe?igsh=bzVkaTEwN25ndGZz)\nX: [hapycb](https://x.com/hapycb) \nTiktok: [i_am_young22](https://www.tiktok.com/@i_am_young22)\nTwitch: [h1nadesu](https://www.twitch.tv/h1nadesu)\nYoutube: [hapycb](https://www.youtube.com/@hapycb) / [hinachan9100](https://www.youtube.com/@hinachan9100)', inline: true })
	.setImage('https://kprofiles.com/wp-content/uploads/2023/08/HINA-534x800.jpg')

    const Embed4 = new EmbedBuilder()
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
	.setImage('https://kprofiles.com/wp-content/uploads/2023/08/SIYEON-534x800.jpg')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("members")
        .setDescription("send members profile")
		.setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [Embed1, Embed2, Embed3, Embed4] })
    }
}
