import mongoose from "mongoose";

const connectToMongoDb = async () => {
  console.log("process.env.MONGODB_URI", process.env.MONGODB_URI);

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("successfully connected to Mono Db");
  } catch (error) {
    console.log("error", error);
  }
};

export default connectToMongoDb;
