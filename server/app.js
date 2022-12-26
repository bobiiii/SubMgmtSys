import express from "express";
import DBConnect from "./mongodb/DBConnect.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;
const DATABASE_URL = "mongodb://localhost:27017";

DBConnect(DATABASE_URL);

app.use(express.json());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("root path getted");
});
app.get("/login", (req,res)=>{
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.send("login");
  console.log(req.body);
  console.log("app get worls");
})
app.post("/login", (req,res)=>{
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.send("login");
  console.log(req.body);
  console.log(req.body.loginPhone);
  console.log("app post short url");
})
app.get("http://localhost:5173/login", (req,res)=>{
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.send("login");
  console.log(req.body);
  console.log(req.body.loginPhone);
  console.log("app post full url");
})


// app.get("login", (req, res) => {
//   const phone = req.body
//   res.send("hello login fro server")
//   console.log(phone)
//   console.log("hey")
// });
// app.post("/login", (req, res) => {
 
//    const phone = req.body
//   res.send("hello login fro server")
//   console.log(phone)
//   console.log("h")
// });
// app.get("/api", (req, res) => {
//   res.send({
//     name: "Babar",
//     email: "sample@server.com",
//     accEmail: "babatnetf2@gmail.com",
//     password: "babardsi",
//     userNo:"05",
//     userPin:"7897",
//     validTill: "11-12-2002",
//     paymentStatus:"paid",
    
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
