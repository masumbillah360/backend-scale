import mongoose from 'mongoose'

import appConfig from '../config';

async function dbConnect() {
    try {
        console.log("Connecting....")
        await mongoose.connect(appConfig.MONGO_URI)
        console.log("Connected")
    } catch(err:unknown) {
        console.error("Error to connect DB, ", err)
        throw new Error("Error in connecting to the DB")
    }
     finally {
      await mongoose.disconnect()
    }
}


export default dbConnect;
