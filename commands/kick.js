module.exports = {
    name: '?kick',
    description: 'this command kicks a member',
    execute(message, args) {
        const member = message.mentions.users.first();
        if(message.member.permissions.has("KICK_MEMBERS")) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked");
        } else {
            message.channel.send('You cant kick that member');
        }
            
               
    }
           
}
    
