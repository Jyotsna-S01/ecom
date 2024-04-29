import mongoose from "mongoose";
import colors from "colors";

const db = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to database ${conn.connection.host}`.bgRed.red);
    } catch (error) {
        console.log(error.message.bgRed.white);
    }
}

export default db;