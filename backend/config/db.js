import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to DB Successful");
  } catch (error) {
    console.log("Connection to DB Failed", error);
    process.exit(1);
  }
};
