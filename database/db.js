import mongoose from "mongoose";

export const Connection = async (username, password) => {
  //const URL = `mongodb+srv://sowmikrishcrazy:t8jcGisJaqsIFEFd@ecommerceweb.dqqturl.mongodb.net/?retryWrites=true&w=majority`;
  // const URL = `mongodb://${username}:${password}@ecommerce-shard-00-00.fdvft.mongodb.net:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=admin&retryWrites=true&w=majority`;
  const URL = `mongodb+srv://${username}:${password}@cluster0.ayvqhgr.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); //monitoring engine
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
