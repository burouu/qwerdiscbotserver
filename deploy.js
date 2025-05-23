const { REST, Routes } = require("discord.js");

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// importação de commands
const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "slash-commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for (const file of commandFiles) { // <--- added "of" instead of "on"
    const command = require(`./slash-commands/${file}`);
    commands.push(command.data.toJSON());
}

// instância rest
const rest = new REST({ version: "10" }).setToken(TOKEN);

// deploy
(async () => {
    try {
        console.log(`Resetando ${commands.length} comandos...`);

        // PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands }
        );
        console.log("Comandos registrados!");
    } catch (error) {
        console.error(error);
    }
})();