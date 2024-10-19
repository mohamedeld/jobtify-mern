import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
const app = express();

const PORT = process.env.PORT || 8080;
dotenv.config();
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})