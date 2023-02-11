const express = require("express");
const app = express();
const cors = require("cors");
require ('./db/conn');
const authRoutes =require ("./Router/AuthRoutes");
const cookieParser = require("cookie-parser");

// app.use(cors({
//     origin: ["http://localhost:3000"] ,
//     method:["GET", "POST"],
//     Credentials:true
// }));
// app.use(cors());
app.use(cors({origin: true, credentials: true}));


app.use(cookieParser());
app.use(express.json());  
app.use("/",authRoutes);

app.get('/', (req,res)=>{
  res.send("hello")
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
