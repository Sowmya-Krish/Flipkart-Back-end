import Product from "./model/productSchema.js";
import { products } from "./constants/product.js";

const DefaultData = async () => {
  try {
    //await Product.deleteMany({}); //restrict duplicates
    // console.log(products);
    // console.log("hello")
    await Product.insertMany(products);
    //const data = await Product.find();
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default DefaultData;
