import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const Connection = () => {
    
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-list-database.qfzcjv1.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect (MONGODB_URL, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connection Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;