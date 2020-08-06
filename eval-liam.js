exports.run = (client, message, args) => {
    if(message.author.id != "620300579608068135") return;
    if(!args[0]) {
        return message.channel.send("Please provide code for me to run!");
    }
    try {
        const code = args.join(" ");
        let evaled = eval(code);
        if(typeof evaled != "string") {
            evaled = require("util").inspect(evaled);
        }
    } catch (err) {
        return message.channel.send({embed: {
            color: 7948427,
            description: `**Error:**\n`
            + `\`There was an error while compiling your code: ${err}\``,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    return message.channel.send({embed: {
        color: 7948427,
        description: `**Success:**\n`
            + `\`Your code compiled successfully!\``,
        author: {
            name: message.author.id,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}
