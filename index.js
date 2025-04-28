
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

 // dotenv

const dotenv = require('dotenv');
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID  } = process.env

//  importação de comandods

const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "slash-commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandsFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command)
  } else {
    console.log(`Este comando em ${filePath} está com "data" ou "execute" ausente`)
  }
}

console.log(client.commands)

// Login do bot

client.once(Events.ClientReady, readyClient => {
	console.log(`Esse chave aqui: ${readyClient.user.tag} , ta on`);
});

//client login
client.login(TOKEN);

// Listener de interações
client.on(Events.InteractionCreate, async interaction => {
  if(!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
      console.error(`Comando não encontrado!`)
      return
    }
    try {
      await command.execute(interaction)
    }
    catch (error) {
      console.error(error)
      await interaction.reply("Ta com erro nengue")
    }
})