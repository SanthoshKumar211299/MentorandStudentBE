import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config()
try {
   mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`) 
   console.log("mongoose connect")
} catch (error) {
    console.log(error)
}

export default mongoose