const express = require('express')
const  app = express();

//routes

app.get("/",async(req,res,next) => {
  try{
    throw new Error('something went wrong')
  } catch(err){
    next(err);
  }
});



//centralized the error handle

function errorHandle(err,req,res,next){
  console.log(err.stack)
  res.status(500).json({error: err.message})
} 


app.use(errorHandle)

app.listen(3000,() => {
  console.log(`server is runnning on port 3000`)
})
