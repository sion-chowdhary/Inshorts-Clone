import { data } from "./constants/data.js";

import News from "../server/model/news-schema.js";

const DefaultData = async () => {
  try {
    await News.insertMany(data);
    console.log("Data imported sucessfully");
  } catch (error) {
    console.log("Error ", error.message);
  }
};

export default DefaultData;
