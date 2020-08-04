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
client.login(process.env.BOT_TOKEN);

// LYRICS COMMAND
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Genius = new (require("genius-lyrics")).Client(
  "KXNktI6H95aS19jvFQMDricYj5t_XP1VjyFIWMBXhViVSaTkSpilhAzO7Z3Ge-OW"
);
/*


module.exports = {
  name: "lyrics",
  category: "info",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(`Please Give Me A Song Name!`);

    let Name = args.join(" ");

    Genius.tracks.search(Name).then(results => {
      const song = results[0];
      song
        .lyrics()
        .then(lyrics => {
          message.channel.send(
            new MessageEmbed()
              .setColor(Color)
              .setTitle(`${song.title} Lyrics`)
              .setDescription(
                lyrics.length > 1900 ? `${lyrics.substr(0, 1900)}...` : lyrics
              )
              .setFooter(`Song Creator : ${song.artist.name}`)
              .setThumbnail(song.humbnail)
              .setTimestamp()
          );
        })
        .catch(err => console.error(err))
    });
  }
};
