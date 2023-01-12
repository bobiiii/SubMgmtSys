import  express  from "express";
import {loginAuth, signupAuth} from "../controller/login.controller.js"



const router = express.Router()

router.post("/", loginAuth )
router.post("/signup", signupAuth)


// loginAuth

export default router; 