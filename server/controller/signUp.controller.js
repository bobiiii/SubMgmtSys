import {DB} from "../dummyDB/DB.js"

export const signUpAuth =(req,res)=>{
    console.log("sign up contro")
    const {fname, lname, phone, password} =req.body
    const phoneExist = DB.find(data=> data.phone === phone)
    if (phoneExist) {
        res.status(400).send("already a user")
        
    } else {
        DB.push({phone, password})
        res.send("Your Account has been created")
    }
}