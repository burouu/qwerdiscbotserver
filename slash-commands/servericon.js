const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servericon')
        .setDescription('server icon'),
    
    async execute(interaction) {
        const guild = interaction.guild;
        const iconURL = guild.iconURL({ 
            size: 4096, 
            dynamic: true, 
            format: 'png' 
        });

        if (!iconURL) {
            return interaction.reply({ 
                content: '❌ This server has no icon!', 
                ephemeral: true 
            });
        }

        // Check if icon is animated (GIF)
        const isAnimated = guild.iconURL({ dynamic: true }).endsWith('.gif');
        const format = isAnimated ? 'gif' : 'png';

        const embed = new EmbedBuilder()
            .setTitle(`Server Icon - ${guild.name}`)
            .setDescription(`[Download ${format.toUpperCase()}](${guild.iconURL({ size: 4096, dynamic: true })})`)
            .setImage(guild.iconURL({ size: 4096, dynamic: true }))
            .setColor('Random')


        await interaction.reply({ embeds: [embed] });
    }
};