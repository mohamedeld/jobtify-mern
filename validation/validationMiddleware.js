import {body,validationResult} from "express-validator";


const withValidationErrors = (validateValues)=>{
  reutrn [
    validateValues,
    (req,res,next)=>{
      const errors = validationResult(req);
      if(!errors?.isEmpty()){
        const errorMessages = errors?.array()?.map(error=> error.msg);
      throw new Error(errorMessages);
      }
      next();
    }
  ]
}

export const validateTest = withValidationErrors([
  body('name').notEmpty().withMessage("name is required").isLength({max:50}).withMessage('name must be at least 50')
])