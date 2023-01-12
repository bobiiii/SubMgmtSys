import { DB } from "../dummyDB/DB.js";


export const loginAuth= (req, res)=>{
  console.log("login auth from lgin-cntrlr works")
    const phone = req.body.phone
  const password = req.body.password
  const phoneExist= DB.find(db => db.phone === phone && db.password === password)
  if (phoneExist) {
    res.send("Success, Registered User")
  } else {
    
    res.status(400).send(" Server::REjected, Non-Reg User")
    console.log(DB)
    
  }
}



export const signupAuth= (req,res)=>{
  console.log("sign cntrlr works")
  res.send("wroking from server")


}


// (req,res)=>{
//   console.log("router post works")
//   const phone = req.body.phone
//     const password = req.body.password
    
    
//     const phoneExist= DB.find(db => db.phone === phone && db.password === password)
//     if (phoneExist) {
//       res.send("Success, Registered User")
//     } else {
      
//       res.status(400).send(" Server::REjected, Non-Reg User")
//       console.log(DB)
      
//     }
// }