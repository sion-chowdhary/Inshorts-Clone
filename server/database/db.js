import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@inshorts-clone.geyvs4o.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting the database", error);
  }
};

export default Connection;
