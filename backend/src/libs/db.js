// src/libs/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_CONNECTIONSTRING;

    await mongoose.connect(uri);
    console.log("✅ Connect Mongoose success");
  } catch (error) {
    console.error("❌ Lỗi khi kết nối CSDL:", error);
    process.exit(1);
  }
};
