require('dotenv').config()
import { Client} from "discord.js";
import { validateEnv } from "./utils/validateEnv";
import { connectDatabase } from "./database/connectDatabase";
import { onMessage } from "./events/messages";


(async () => {
    //We use Validate function to prevent Typescript giving us errors
  if (!validateEnv()) return;
  //Discord Client 
  const client = new Client();
  
  // We imported connect database function above
  await connectDatabase()

  //Ready evemt
  client.on('ready', () => {
      //We could use username/tag etc here
    console.log(`${client.user.username} is now online`)
  })

  //message even which will pull from the command list
  client.on("message", async (message) => await onMessage(message));
  
})();