import mongoose from "mongoose"
import { MongoClient, ServerApiVersion } from 'mongodb';

const connectDB = async () => {

    try {
        const conn = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

        console.log(`MongoDb connected on: ${conn}`)
    } catch (error) {
        console.error(`Error${error.message}`)
        process.exit(1)
    }
}

export default connectDB