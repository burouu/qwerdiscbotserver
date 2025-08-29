const { SlashCommandBuilder } = require("discord.js");


module.exports = {  
    data:new SlashCommandBuilder()
        .setName("marry")
        .setDescription("marry")
        .setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply(".marry <@362879229496393735>")
    }
}