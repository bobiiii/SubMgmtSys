import express from "express";
import DBConnect from "./mongodb/DBConnect.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;
const DATABASE_URL = "mongodb://localhost:27017";

DBConnect(DATABASE_URL);

app.use(express.json());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
 });
app.post("/api", (req, res) => {
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
