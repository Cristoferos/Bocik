module.exports = {
    name: '?embed',
    description: 'this is a embed command',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#0000EE')
            .setTitle('Wymagania konkursu')
            .setURL('https://www.twitch.tv/cristoferosfn')
            .setDescription('To moj kanal twitch bedzie milo jak wpadniesz')
            .addFields(
                { name: 'Kanal', value: 'Follow na twitchu' },
                { name: 'Subik', value: 'Sub na kanale' },
                { name: 'Rekacja', value: 'Reakcja na konkurs' }

                         )

            .setImage('https://www.telepolis.pl/images/miniatury/twitch.jpg')
        message.channel.send(newEmbed);
    }       


    
} 