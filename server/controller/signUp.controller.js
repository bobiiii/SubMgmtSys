import { Users } from "../DbMongo/DbConnect.js";

export const signUpAuth =async (req,res)=>{
    const {fname, lname, phone, password} =req.body
    const userExist = await Users.findOne({phone : phone})
if (userExist) {
    
    res.status(403).send("User already exists")
}else{
    const userData = new Users({
        phone : phone,
        password : password
    })
    res.status(200).send("User not exists")
    userData.save().then(() => console.log("One entry added"), (err) => console.log(err));

}
}


// import {DB} from "../dummyDB/DB.js"

// export const signUpAuth =(req,res)=>{
//     console.log("sign up contro")
//     const {fname, lname, phone, password} =req.body
//     console.log(phone, password)
//     const phoneExist = DB.find(data=> data.phone === phone)
//     console.log(phoneExist)
//     if (phoneExist) {
//         res.status(403).send("User Already Exists")
        
//     } else {
//         DB.push({fname,lname,phone, password})
//         res.send("Your Account has been created")
//     }
// }
