import mongoose from "mongoose";

export async function mongoConnection() {
  try {
    await mongoose.connect("mongodb://mongodb:27017/chatsocket", {
      connectTimeoutMS: 5000,
    });

    console.log("Database Connected.");
  } catch (error) {
    console.log(error);
  }
}
