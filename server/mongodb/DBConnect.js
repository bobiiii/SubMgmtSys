import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const DBConnect = async (DATABASE_URL)=> {
    try {
        const DBOptions = {
            dbname: "school"
        }
        await mongoose.connect(DATABASE_URL, DBOptions)
        console.log("connection successfull")
    } catch (error) {
        console.log(error)
    }

}
export default DBConnect;