//error handler middleware
const express = require('express')
const app = express()



app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('somehing broke')
  })
  
  app.listen(300,() => {
    console.log(`server is running on port 3000`)
  })