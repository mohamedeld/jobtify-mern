import express from "express";
import { validateUserInput } from "../validation/validationMiddleware.js";
import { login, register } from "../controllers/user.controller.js";


const router =express.Router();

router.route("/login").post(validateUserInput,login);
router.route("/register").post(validateUserInput,register);

export default router;