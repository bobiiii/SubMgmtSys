import express from "express";
import DBConnect from "./mongodb/DBConnect.js";
import bodyParser from "body-parser";
import cors from "cors";
import {DB} from "./dummyDB/DB.js"
import login_routes from "./routes/login.js";
import signup_routes from "./routes/signup.js";


const app = express();
const port = 3000;
// const DATABASE_URL = "mongodb://localhost:27017";
// DBConnect(DATABASE_URL);

app.use(express.json());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

app.use("/login", login_routes)
app.use("/signup", signup_routes)

app.get("/", (req, res) => {
  res.send("res from server");
 });

// app.post("/signup",(req,res)=>{
//   console.log("signup")
//   })

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});





//  let arr =[{
//   phone: "12345",
//   password: "54321",

// }]
// app.get("/login",(req,res)=>{
//   res.send(arr)
// })

// app.post("/login", (req, res) => {
//   const phone = req.body.phone
//   const password = req.body.password
//   const phoneExist= DB.find(db => db.phone === phone && db.password === password)
//   if (phoneExist) {
//     res.send("Success, Registered User")
//   } else {
    
//     res.status(400).send(" Server::REjected, Non-Reg User")
//     console.log(DB)
    
//   }
  
  
  // let phn =phone.parseInt()
  // let pass =password.parseInt()

//console.log(typeof password)
//console.log(typeof phone)
  //arr.push({phone, password})
  //console.log("from Ui"+phone, password)
  //res.send("success data rec in server")
  
  
  // let a= false
  // if (phone && pass ) {
  //   res.send(300)
  // } else {
  //   res.send("asd")
    
  // }
// });