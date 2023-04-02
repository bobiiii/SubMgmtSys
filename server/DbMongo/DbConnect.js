import mongoose from "mongoose"

const mongoURI = `mongodb+srv://babersdn:12345@submgmtsys.nkuwkl3.mongodb.net/test`

export const dbconnect = ()=>{mongoose.connect(mongoURI,{
    useNewUrlParser : true,
    useUnifiedTopology: true
  }).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
}
  

const UserSchema = new mongoose.Schema({
    phone: Number,
    password: String,
    
});

export const Users = mongoose.model("User", UserSchema)

// const stud = new Users({
//   phone: 1001,
//   password: 'babar',
  
// });
// // Add the document to Collections
// stud.save().then(() => console.log("One entry added"), (err) => console.log(err));
