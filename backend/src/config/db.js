import mongoose from "mongoose";

export const connectDB= async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected successfully!")
    } catch (error) {
        console.log("error connecting mongodb",error);
        process.exit(1)  //1 exit with failure 
    }
}