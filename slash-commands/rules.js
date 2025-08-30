const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
    .setTitle('Rules')
    .setDescription('Please read and follow the following rules before talking in the server. We want to provide a space where everyone can enjoy the server and for that we need your help as well.')
    .addFields(
		{ name: '1. Respect Everyone', value: 'Treat all members with respect. Bullying, harassment, and personal attacks will not be tolerated.' },
        { name: '2. No Hate Speech or Discrimination', value:'Any form of hate speech, racism, sexism, homophobia, or discrimination is strictly prohibited.' },
        { name: '3. No Spamming or Self-Promotion', value:'Avoid spamming channels or sending unsolicited advertisements or self-promotions without permission.' },
        { name: '4. Keep It Safe for Work (SFW)', value:'This is a safe space. No NSFW content, explicit images, or inappropriate language is allowed.' },
        { name: '5. Follow Discord’s Terms of Service', value:'All members must comply with [Discord’s Terms of Service](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines).' },
        { name: '6. No Offensive or Inappropriate Usernames', value:'Usernames must be appropriate and non-offensive. Violators will be asked to change their names or may be removed.' },
        { name: '7. Use English in Main Channels', value:'The primary language of this server is English. Please use English in all main channels unless otherwise specified.' },
        { name: '8. No Impersonation', value:'Do not impersonate other members, staff, or public figures. This will result in an immediate ban.' },
        { name: '9. Do not beg.', value: 'Do not ask others to buy you things, e.g. Discord Nitro. This includes DMing server members.'},
        { name: '10. No Punishment Evasion', value: 'It is forbidden to create or use an alternative account to evade any punishment, whether a timeout or a ban. Violation of this rule will result in a permanent ban on all associated accounts.'}
    )
    .setFooter(
        { text: 'Follow the rules to keep the community a good place for everyone.'}
    )

module.exports = {  
    data:new SlashCommandBuilder()
        .setName("rules")
        .setDescription("rules")
        .setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] }) 
    }
}