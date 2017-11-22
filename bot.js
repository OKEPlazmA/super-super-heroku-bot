const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzM5MjIwMjU4MDI2MTYwMTMx.DPZa_Q.1xfE2y1s8UdTQh4-WgzAiVwYpWU);
