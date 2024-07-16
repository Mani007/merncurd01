if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

const mongoose = require('mongoose');

async function connectToDb(connection){
    console.log('connecting to DB');
    try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
    } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
    }
}

module.exports = connectToDb;