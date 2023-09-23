import mongoose from "mongoose"


const Connection =async() => {
    const URL = "mongodb://127.0.0.1:27017/Capstone"
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database Connected Successfully')
        
    } catch (error) {
        console.log("error while connecting to the database")
    }

}

export default Connection