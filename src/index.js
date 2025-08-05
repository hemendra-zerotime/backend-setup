import dotenv from "dotenv"
import dbConnect from "./db/db.js"
import { app } from "./app.js"
dotenv.config({path:'./env'})
const port = process.env.PORT || 8000


dbConnect().then((async () => {
    app.on("error",(error)=>{
        console.log(`Error: ${error}`)
        throw error
    })
    app.listen(port,()=>{
        console.log(`server is listening to port: ${port}`) 
    })
})).catch((error)=>{
    console.log(error)
})