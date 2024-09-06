const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";

const app = express();

app.use(express.json())

const ALL_USER = [
    {
    username:"harkirat@gmail",
    password:"123@",
    name: "harkirat",
    },

    {
        username:"shivam@gmail.com",
        password:"@3443",
        name: "shiv",
    },
    {
        username:"dipe@gmail.com",
        password: "@3453",
        name:"dipe"

    },

];

function UserExist(username,password){

    let UserExist = false;
    for(let i=0;i<ALL_USER.length;i++){
  if(ALL_USER[i].username == username && ALL_USER[i].password == password){
    UserExist = true;
  }
    }

    return UserExist;

}

app.post("/signin",function(req,res){
   const username = req.body.username;
   const password = req.body.password;


   if(!UserExist(username,password)){
    return res.status(403).json({
        msg: "User doesn't exits in our Database"
    })
   }

   var token = jwt.sign({username:username},jwtPassword)
   return res.json({
    token,
   });
});

app.get("/user",function(req,res){
    const token = req.headers.authorization;
    const decode = jwt.verify(token,jwtPassword);
    const username = decode.username;
    //return res.status(403).json({
          //  msg:"invalid token"

          res.json({
            users:ALL_USER
        });
    
});

app.listen(3000, () => {
    console.log("Server running on port 3000");

})
