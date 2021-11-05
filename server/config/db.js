const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://user:user@careerfinder.dbge2.mongodb.net/careerfinder?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`.brightCyan);
};

module.exports = connectDB;
