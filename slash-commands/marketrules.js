const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


const Embed = new EmbedBuilder()

    .setColor("#36393F")
    .addFields(
        { name: '1. All Discord & Server Rules Apply', value: 'Follow the server’s main rules + Discord’s TOS.\n‎' },
        { name: '2. Only QWER-Related Items Allowed', value: '**Permitted**: Albums, official merch, fanmade goods (if allowed).\n**Banned**: Bootlegs, illegal downloads, unrelated items.\n‎' },
        { name: '3. No Scams or Price Gouging', value: 'Be honest about item condition & pricing.\nNo fake listings or reselling at extreme markups (mods may intervene).\n‎' },
        {
            name: '4. Use Clear Post Format', value: `Title Example:
[WTS/WTB/WTT] Item Name (Price/Location)

WTS = Want to Sell
WTB = Want to Buy
WTT = Want to Trade

Post Details:

- Photos (with timestamps preferred).
- Item condition (new/used/etc.).
- Price (in USD, KRW, or agreed currency).
- Payment/shipping method (PayPal G&S, local meetup, etc.)\n‎` },
       { name: '5. Transactions at Your Own Risk', value: '- The server is not responsible for scams/bad deals.\n- Sellers and buyers make detailed transactions in their personal messages.\n- DO NOT put your PII(Personal Identification Information), Banking details or any other information that can put yourself at risk in the public forum.' },
       { name: '6. No Spam or Off-Topic Posts', value: 'Bumping allowed once every 24 hours. Edit your post if sold\n‎' },
       { name: '7. Mod Discretion', value: 'Moderators can remove suspicious posts or ban repeat scammers.' },
)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("marketrules")
        .setDescription("Market Rules")
        .setDefaultMemberPermissions(0),

    async execute(interaction) {
        await interaction.reply({ embeds: [Embed] })
    }
}