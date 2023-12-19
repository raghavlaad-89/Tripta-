require("dotenv").config();
const connectDB = require("./db/connect");
const Book = require("./models/books");
const BookJson = require("./books.json");

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Book.create(BookJson);
        console.log("success");
    }catch(error) {
        console.log(error);
    }
}

start();