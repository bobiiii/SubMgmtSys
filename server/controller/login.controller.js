import { Users } from "../DbMongo/DbConnect.js";

export const loginAuth= (req, res)=>{
    
  const phone = req.body.phone
    const password = req.body.password
    Users.findOne({phone : phone  },(err, user)=>{
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send( "User Not found." );
      }


      if (user.phone == phone) {
        if (user.password === password) {
       return  res.status(200).send("Login Success")
        }else  {
          return  res.status(403).send("username or password is incorrect")
         
        }
        
      }
      

      // if (err){
      //   res.status(500).send("error in user find func")
      // }
      // if (!user){
      //   res.status(403).send("user not exists user find func")
      // }
      // if (user){
      //   res.status(200).send("user exists  userfind ")
      // }
    })
  // if (userExist) {
  //   console.log(userExist)
  //   res.send("Success, Registered User")
  // } else {
  //   res.status(403).send(" Server::REjected, Non-Reg User")
    
    
  // }
}

