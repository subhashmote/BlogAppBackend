

const mongoose = require("mongoose");

require("dotenv").config();
const MONGODB_URL = 'mongodb+srv://subhashmote94:HswWeTrs9e5suvVh@cluster0.wnplhyg.mongodb.net/Blog'


const dbConnect = () => {
    mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log("DataBase Connected Successfully");
    })
    .catch((error)=>{
        console.log("Error in Connecting the DataBase");
    })
}

module.exports = dbConnect;