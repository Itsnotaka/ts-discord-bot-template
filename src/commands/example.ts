//This is the example of pulling value from the database
import { CommandInt } from "../interface/CommandInt";
import Data from "../database/models/model"
import { MessageEmbed } from "discord.js";

export const example: CommandInt = {
    name: "example",
    description: "An example display",
    run: async (message) => {
        const{ author, channel, content } = message;
        let targetUserData = await Data.findOne({
            //We want to find if the database has the same author id, if not we will create a user data
            discordId: author.id
        })
        if (!targetUserData) {
            targetUserData = await Data.create({
                discordId: author.id,
                timestamp: Date.now()
            });
            //We must make sure to use await to make sure the data is properly saved into the databse
            await targetUserData.save();
        }
        try {
        const example = new MessageEmbed();
            example.setDescription(`This is an exmaple, your discord id is ${targetUserData.discordId}`)
            await channel.send(example);
        } catch {
        const errorEmbed = new MessageEmbed();
            errorEmbed.setDescription(`Error, timestamp is ${targetUserData.timestamp}`)
            await channel.send(errorEmbed);
        }
    }
}