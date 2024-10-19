import Job from "../models/job.model.js";

const getAllJobs = async (req,res)=>{
  try{
    const allJobs = await Job.find({});
    res.status(200).json({
        allJobs
    }) 
  }catch(error){
    res.status(500).json({
      message:error
    })
  }
}
const getSingleJob = async (req,res)=>{
  const {id} =req.params;
  try{
    if(!id){
      res.status(404).json({
        message:"id is not provided"
      })
    }
    const Job = await Job.findById(id);
    res.status(200).json({
      Job
    }) 
  }catch(error){
    res.status(500).json({
      message:error
    })
  }
}

const createSingleJob = async (req,res)=>{
 
  try{
    const Job = await Job.create(req.body);
    res.status(200).json({
      Job
    }) 
  }catch(error){
    res.status(500).json({
      message:error
    })
  }
} 

const updateSingleJob = async (req,res)=>{
  const {id} =req.params;
  try{
    if(!id){
      res.status(404).json({
        message:"id is not provided"
      })
    }
    const Job = await Job.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({
      Job
    }) 
  }catch(error){
    res.status(500).json({
      message:error
    })
  }
}
const DeleteSingleJob = async (req,res)=>{
  const {id} =req.params;
  try{
    if(!id){
      res.status(404).json({
        message:"id is not provided"
      })
    }
    const Job = await Job.findByIdAndDelete(id);
    res.status(200).json({
      message:'deleted successfully'
    }) 
  }catch(error){
    res.status(500).json({
      message:error
    })
  }
}
export {
  getSingleJob,
  getAllJobs,
  DeleteSingleJob,
  updateSingleJob,
  createSingleJob
}