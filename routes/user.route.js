import express from "express";
import { validateLoginInput, validateUserInput } from "../validation/validationMiddleware.js";
import { login, register } from "../controllers/user.controller.js";


const router =express.Router();

router.route("/login").post(validateLoginInput,login);
router.route("/register").post(validateUserInput,register);

export default router;