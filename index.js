const dotenv = require("dotenv").config();
// Load the fs module
const fs = require('fs');

const {
  Client,
  Events,
  GatewayIntentBits: { Guilds, GuildMessages, MessageContent },
} = require("discord.js");
const options = {
  intents: [Guilds, GuildMessages, MessageContent],
};

const client = new Client(options);
client.login(process.env.BOT_TOKEN);

console.log("ready");
client.on(Events.MessageCreate, (message) => {
  console.log("message on.")
  const sender = message.author;
  if (message.content == "!random_buki") {
    if (!sender.voice) {
      // Read the file
      const csvFile = fs.readFileSync('buki.csv', 'utf8');

      // Split the csv content by line
      const lines = csvFile.split('\n');

      // Get a random line
      const randomLine = lines[Math.floor(Math.random() * lines.length)].trim();
      message.channel.send(message.member.username + "あなたが使うブキは" + randomLine + "です。");
    } else {
      const users = member.voice.channel.members;
      for (const user of users) {
        const randomLine = lines[Math.floor(Math.random() * lines.length)].trim();
        message.channel.send(user.displayName + "あなたが使うブキは" + randomLine + "です。");
      }
    }
  }
});
