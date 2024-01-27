import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect to Mono Db");
  } catch (error) {
    console.log("error", error);
  }
};

export default connectToMongoDb;
