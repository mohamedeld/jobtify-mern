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
export const login = (req,res,next)=>{
  try{

  }catch(error){
    res?.status(500).json({
      message:error?.message
    })
  }
}