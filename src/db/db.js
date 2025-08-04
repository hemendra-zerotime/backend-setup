import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
    console.log(`MongoDB connected at host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Failed!", error);
    process.exit(1);
  }
};

export default dbConnect;
