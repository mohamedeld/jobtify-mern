import bcrypt from "bcrypt";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import User from "../models/user.model.js"
export const register = async (req,res,next)=>{
  try{
    const newUser = await User.create(req.body);
    const token = newUser.generateAuthToken()
    res.status(200).json({
      message:"reigstered successfully",
      newUser,
      token
    });
  }catch(error){
    res?.status(500).json({
      message:error?.message
    })
  }
}
export const login = async (req,res,next)=>{
  try{
    const {email,password} = req?.body;
    const userExist = await User.findOne({email});
    if(!userExist){
      throw new NotFoundError("user is not found")
    }
    const hashedPassword = await bcrypt.compare(password,userExist?.password);
    if(!hashedPassword){
      throw new BadRequestError("password is invalid")
    }
    const token = userExist?.generateAuthToken();
    res?.status(200).json({
      message:"logined successfully",
      user:userExist,
      token
    })
  }catch(error){
    res?.status(500).json({
      message:error?.message
    })
  }
}