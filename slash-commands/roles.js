const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const Embed1 = new EmbedBuilder()

    .setTitle('Roles')
    .setDescription('Choose the roles you want to be mentioned for in community, Q.W.E.R, or members updates.')
    .addFields(
        { name:'Announcements', value: 'If you want to be mentioned in community announcements ( :envelope: )' },
        { name:'QWER Updates', value: 'If you want to be mentioned in QWER Updates ( :revolving_hearts: )' },
        { name:'Chodan updates', value: 'If you would like to be mentioned in Chodan updates ( <:lChodan:1294859382164688936> )' },
        { name:'Magenta updates', value: 'If you would like to be mentioned in Magenta updates ( <:lMagenta:1294859460824666133> )' },
        { name:'Hina updates', value: 'If you would like to be mentioned in Hina updates ( <:lHina:1294859494261657683> )' },
        { name:'Siyeon updates', value: 'If you would like to be mentioned in Siyeon updates ( <:lSiyeon:1294859525073010742> )' },
    )


module.exports = {
    data: new SlashCommandBuilder()
        .setName("roles")
        .setDescription("roles")
        .setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [ Embed1 ] })
    }
}