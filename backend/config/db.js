import mongoose from 'mongoose';
import colors from 'colors';

// const databaseUri = "mongodb://127.0.0.1:27017/food-delivery"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.underline.yellow);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
