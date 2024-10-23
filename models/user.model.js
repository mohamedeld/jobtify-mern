import mongoose from 'mongoose';
import { USER_ROLE } from '../utils/constants.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const UserSchema = new mongoose.Schema(
  {
    name:String,
    email:{
      type:String,
      required:[true,"email is required"],
      unique:true
    },
    password:String,
    last_name:String,
    location:{
      type:String,
      default:'my city'
    },
    role:{
      type:String,
      enum:Object.values(USER_ROLE),
      default:USER_ROLE.USER
    }
  },
  { timestamps: true }
);
UserSchema.pre('save',async function(next){
  try{  
    if(!this.isModified("password")){
      return next();
    }
    this.password = await bcrypt.hash(this.password,12);
    next();
  }catch(error){
    next(error)
  }
})

// Method to generate JWT token
UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ userId: this._id }, process.env.SECURE_KEY, {
    expiresIn: process.env.EXPIRED_AT
  });
  return token;
};
const User = mongoose.model('User', UserSchema);
export default User;

