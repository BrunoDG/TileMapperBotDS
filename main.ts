import { Client } from "@typeit/discord";
import { Intents } from "discord.js";

async function start() {
  // intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  const client = new Client({
    classes: [
      `${__dirname}/*Discord.ts`, // String glob para carregar as classes
      `${__dirname}/*Discord.js`, // Para compilar usando o 'tsc' e transpilar pra JavaScript
    ],
    silent: false,
    variablesChar: ":",
  });

  await client.login("INSERT YOUR TOKEN HERE"); // Insira o token do Discord Bot do seu developer client
}

start();
