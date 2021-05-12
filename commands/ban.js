module.exports = {
    name: '?ban',
    description: 'this command bans a member',
    execute(message, args) {
        const member = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS")){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been baned");
        } else {
            message.channel.send('You cant ban that member');



        }
    }
}