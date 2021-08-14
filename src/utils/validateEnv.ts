export const validateEnv = () => {
    //we are trying to make sure typescript won't emmit an error
    if (!process.env.TOKEN) {
      console.warn("Missing Discord bot token.");
      return false;
    }
  
    if (!process.env.MONGO_URI) {
      console.warn("Missing MongoDB connection.");
      return false;
    }
    return true;
  };