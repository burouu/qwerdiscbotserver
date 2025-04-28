const { SlashCommandBuilder } = require("discord.js");


module.exports = {  
    data:new SlashCommandBuilder()
        .setName("ping")
        .setDescription("<:kimgyeran:1357150376566063265>"),

    async execute(interaction) {
        await interaction.reply("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIB4JByu2RYk-XqDH6XWOINtJH-AzjXssSuQ&s")
    }
}
