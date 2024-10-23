import {body,param,validationResult} from "express-validator";
import { JOB_STATUS, JOB_TYPE, USER_ROLE } from "../utils/constants.js";
import mongoose from "mongoose";
import Job from "../models/job.model.js";
import { BadRequestError, NotFoundError } from "../errors/customError.js";


const withValidationErrors = (validateValues)=>{
  return [
    validateValues,
    (req,res,next)=>{
      const errors = validationResult(req);
      if(!errors?.isEmpty()){
        const errorMessages = errors?.array()?.map(error=> error.msg);
      throw new BadRequestError(errorMessages);
      }
      next();
    }
  ]
}

export const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage("company is required"),
  body('position').notEmpty().withMessage("position is required"),
  body('jobLocation').notEmpty().withMessage("jobLocation is required"),
  body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage("invalid status value"),
  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage("invalid type value"),
]);

export const validateParam  = withValidationErrors([
  param('id').custom(async(value)=> {
    const isValid = mongoose.Types.ObjectId.isValid(value)
    if(isValid){
      throw new NotFoundError("invalid mongodb id");
    }
    const job = await Job.findById(value);
    if(!job){
      throw new NotFoundError("job is not found")
    }
  }).withMessage("invalid mongodb id")
]);


export const validateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage("name is required"),
  body('email').notEmpty().withMessage("email is required").isEmail().withMessage("please enter a valid email"),
  body('last_name').notEmpty().withMessage("last_name is required"),
  body('password').notEmpty().withMessage("password is required").isStrongPassword().withMessage("password should be strong"),
  body('location').notEmpty().withMessage("location is required"),
]);