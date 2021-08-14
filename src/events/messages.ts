import { Message} from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onMessage = async (message: Message) => {
    if (message.author.bot) {
        return;
    }
    
    //Here is the part where we set most settings for the messgae bot receive during a message event
    const prefix = ".";

    if (!message.content.startsWith(prefix)) {
    return;
    }

    for (const Command of CommandList) {
        if (message.content.startsWith(prefix + Command.name)) {
          await Command.run(message);
          break;
      }
    }
  }


