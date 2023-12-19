require("dotenv").config();
const mongoose = require("mongoose");

uri = "mongodb+srv://raghavlaad89:OPUdognQQYLKdZd2@bookify.vofglmn.mongodb.net/Bookify?retryWrites=true&w=majority"

const connectDB = () => {
    console.log("connect db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;