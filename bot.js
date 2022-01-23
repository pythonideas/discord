// https://discordjs.guide/creating-your-bot/#creating-the-main-file

// Require the necessary discord.js classes
const { Client, Intents, GuildMemberManager } = require('discord.js');
const token = process.env["AMGILP_DISCORD_BOT_TOKEN"];

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const roles = [ '783635108645044244', '783638978947186718' ]

client.on("messageCreate", message => {
  message.member.roles.add(roles[0])
})

// Login to Discord with your client's token
client.login(token).then(result => {
  /*client.channels.fetch('770323250206736387')
  .then(channel => channel.send(""));*/

  const guild = client.guilds.cache.get("770323250206736384")

  guild.members.cache.map(console.log)
});
