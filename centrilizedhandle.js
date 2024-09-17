//centralized error Handling Middlware 
const express = require('express');

const app = express();

//Routes
app.get("/",function(req,res){
  throw new Error("something went wrong")
});

//centralized error handling middleware

function errorHandle(err,req,res,next){
  console.error(err.stack);
  res.status(500).json({error : err.message})
}

app.use(errorHandle)

app.listen(3000,() => {
  console.log(`server is runnning on port 3000`)
})