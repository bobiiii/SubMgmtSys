import  express  from "express";
import { signUpAuth } from "../controller/signUp.controller.js";

const router = express.Router()

router.post("/",signUpAuth)

export default router