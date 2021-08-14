import { CommandInt } from "../interface/CommandInt";
import { MessageEmbed } from "discord.js";

export const help: CommandInt = {
    /* 
    name = the command after the prefix
    description = gives you a reminder of what this command is used for
    */
    name: "help",
    description: "Gives the help panel",
    run: async (message) => {
        const{ author, channel} = message;
        try {
        const helpPanel = new MessageEmbed();
            helpPanel.setTitle("Codex Assistant");
            helpPanel.setAuthor(author.username + "#" + author.discriminator, author.displayAvatarURL())
            helpPanel.addField("Help panel", '`.help` shows bot commands');
            helpPanel.setColor('#b17bff')
            helpPanel.setDescription('All commands start with `.` Do not include `<>` when typing your argument')
            helpPanel.setThumbnail('https://google.com')
            helpPanel.setFooter('Powered by Codex', 'https://google.com')
            helpPanel.setTimestamp()
            await channel.send(helpPanel);
        } catch (error) {
            console.log(error)
        }
    }
}