import { CommandInt } from "../interface/CommandInt";
import { help } from "./help";

/* 
we pull the interface from the file above
Import the command you want and put it after each command
*/
export const CommandList: CommandInt[] = [help];