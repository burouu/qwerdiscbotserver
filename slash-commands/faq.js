const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const Embed = new EmbedBuilder()

const Embed2 = new EmbedBuilder()
    .setTitle('General FAQ')
    .setColor("White")
    .addFields(
        { name: 'Q: Can I be mod / staff / content manager?', value: 'Application forms will be posted in <#1295512596669267968> when we are looking for more. If there is no recent application form within the past week then we are not looking for new mods or content managers.'},
        { name: 'Q: How do I get Level 5 / Level +10 roles?', value: 'These are automatically given based on your chat activity.\n\n You can check your current level in <#1295513551242399804> with /rank ( <@437808476106784770> )'}
    )

module.exports = {  
    data:new SlashCommandBuilder()
        .setName("faq")
        .setDescription("faq")
        .setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [Embed, Embed2] }) 
    }
}