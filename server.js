import * as dotenv from "dotenv"
dotenv.config();
import express from "express";
import morgan from "morgan";
import {nanoid} from "nanoid";
import mongoose from "mongoose";
import jobRoutes from "./routes/job.route.js";
import userRoutes from "./routes/user.route.js";

import globalErrorHandler from "./controllers/error.controller.js"

const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}
app.use("/api/v1/job",jobRoutes)
app.use("/api/v1/user",userRoutes)

async function connectToDBAndServer(){
  try{
    await mongoose.connect(process.env.DB_URL).then(()=>{
      console.log("connected to db successfully");
    }).catch(error=> console.log(error))
    app.listen(PORT,()=>{
  
      console.log(`server is running on port ${PORT}`)
    })
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}
connectToDBAndServer();

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});
app.use(globalErrorHandler);