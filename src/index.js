const Discord = require ("discord.js");

const config = require("./Data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.on("ready", () => console.log("Bot is online!"));

client.login(config.token);