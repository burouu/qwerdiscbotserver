const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const Embed = new EmbedBuilder()
    .setTitle('Welcome to the Discord server for the k-pop band QWER!')
    .setDescription('**QWER (최애의 아이들)** is a 4-member project idol band under Tamago Production, consisting of **Chodan, Magenta, Hina, and Siyeon**. They debuted on October 18, 2023 with their first single album, **Harmony from Discord.**')
    .setImage('https://i.imgur.com/2J5FRLC.png')

const Embed1 = new EmbedBuilder()
    .setColor('White')
    .setDescription('```Rules```\n Read <#1295558279170097202>\n\n ```Links```\n\n')
    .addFields(
        { name: '\n\nQWER Links', value: '<:Logo_of_Twitter:1357151657070432337> Twitter: [@official_QWER](https://twitter.com/official_QWER)\n<:3146788_youtube_logo_icon:1357151831502884944> Youtube: [QWER](https://www.youtube.com/@QWER_Band_official)\n<:S_insta:1354395985228595242> Instagram: [qwerband_official](https://www.instagram.com/qwerband_official/) / [qwermanager](https://www.instagram.com/qwermanager/)\n<:S_tt:1356195933422882876> Tiktok: [qwerband_official](https://www.tiktok.com/@qwerband_official?_t=8pScOdDSvns&_r=1)\n<:S_wv:1356195937487163402> Weverse: [QWER](https://weverse.io/qwer)\n<:S_nvcafe:1356195935482548390> Naver: [QWER](https://cafe.naver.com/eggkim)\n\nIf you would like to see each members social media, see <#1294896466615341056> '},
        { name:'Server Links', value: '[Invite link](https://discord.gg/URUc9jeu2V)\n [Web Page](https://discord.com/servers/qwer-x-bawige-english-server-1294709399553708157)' }
    )

const Embed2 = new EmbedBuilder()
    .setColor('#d285a7')
    .setDescription('```Channels```')
    .addFields(
        { name: 'Informations', value: 'Make sure to read the server <#1295558279170097202> and go pick up some roles at\n<id:customize>. Any important community announcements will be in \n<#1295512596669267968>\n'},
        { name: 'Resources', value: 'Make sure to follow <#1294796548349104150> to get the most important updates.'},
        { name: 'Channels', value: '<#1294802497122078790> are for general discussions.\n<#1294798785419018320> to discuss all things related to QWER\n<#1294798820206710837> to share QWER videos, gifs and pictures.\n<#1295513645102534746> to send any type of media, but respecting the rules.'},
    )

const Embed3 = new EmbedBuilder()
    .setColor('#5abddf')
    .setDescription('```Content```\nYou can find the **member** and **group channels** that are kept up to date by our **Content Uploaders**. You cannot post in these channels, to keep them clean and ordered (but you can react). The pictures/videos are from all sorts of sources: social media, magazine shoots, endorsements, etc.\n\n<#1294800645538320436>\n<#1294800667394703400>\n<#1294800685476614246>\n<#1294800700617920543>\n<#1294801243340017747>\n<#1294801657648906283>')

const Embed4 = new EmbedBuilder()
    .setColor('#c8d88a')
    .setDescription('```Moderators```\n\n <@598673586802130951>\n <@163277586749849600>\n <@540671198200070154>\n <@720982287172501504>\n <@682762419176734737>\n <@1359872670153445438>\n <@244996983754981386>\n <@207612376890081282> \n ‎ ```Content Managers```\n\n <@362879229496393735>\n‎  ') 
    .setFooter(
        { text: '\n\nif you want to be a content uploader or moderator, DM @burouu '}
    )
   

module.exports = {
    data: new SlashCommandBuilder()
        .setName("welcome")
        .setDescription("welcome")
        .setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [ Embed, Embed1, Embed2, Embed3, Embed4 ] })
    }
}