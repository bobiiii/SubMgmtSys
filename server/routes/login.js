import  express  from "express";
import {loginAuth} from "../controller/login.controller.js"



const router = express.Router()

router.post("/", loginAuth )



// loginAuth

export default router; 