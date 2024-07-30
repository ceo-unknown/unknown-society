import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connected Success");
  } catch (error) {
    console.log({ err: error.message });
  }
};

export default connectDb;
