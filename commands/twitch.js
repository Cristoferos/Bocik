module.exports = {
    name: '?twitch',
    description: 'this is my twitch',
    execute(message, args) {

        if (message.member.roles.cache.has('841930553653329960')) {
            message.channel.send('https://www.twitch.tv/cristoferosfn')


        } else {
            message.channel.send('Nie mozesz uzyc tej komendy')
            

        }
        

    }

}