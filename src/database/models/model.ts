import { Document, model, Schema } from "mongoose";

export interface theDatabase {
    discordId: string;
    timestamp: string
}

export const DataBase = new Schema({
    discordId: String,
    timestamp: String
})

export default model<theDatabase>("Data", DataBase);
