module.exports = {
    name: '?clear',
    description: 'use this command to clear messages on chat',
    async execute(message, args){
        if(!args[0]) return message.reply("please enter amount of messages to delete!");
        if(isNaN(args[0])) return message.reply("please type real number");

        if(args[0] > 100) return message.reply("you cant delete more than 100 messages!!");
        if(args[0] < 1) return message.reply("You must delete atleast one message");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages =>{
            message.channel.bulkDelete(messages);
        });


    }

}