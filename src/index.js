import dotenv from "dotenv";
import connectDB from "./db/index.js"

dotenv.config({
    path: "./.env",
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("Error:", error);
        throw error
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);  
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !! ", err);
})

/*  ONE WAY TO APPROACH
import express from "express";
//this is and IEFI
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error)=>{
            console.log("Error:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
           console.log(`App is listening on port ${process.env.PORT}`);  
        })

    } catch (error) {
        console.log("Error : ", error);
        throw error
    }
})()
*/