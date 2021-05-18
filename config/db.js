const mongoose = require('mongoose');

const connection_url = process.env.MONGO_URI || 'mongodb+srv://admin:Shubham268@cluster0.r7fr0.mongodb.net/hiyamee?retryWrites=true&w=majority';

const connectDB = async() => {
    await mongoose.connect(connection_url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });

    console.log("MongoDB Connected");
}

module.exports = connectDB;