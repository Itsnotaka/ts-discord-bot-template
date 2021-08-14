import { connect } from "mongoose";

export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI, {
        useNewUrlParser: true 
        });
    
    console.log("Database Connected!")
}
