//custom error classes


class NotFoundError extends Error {
    constructor(message){
      super(message);
      this.name = 'NotFoundError';
      this.statusCode = 404;
    }
  }
  
  const express = require('express')
  const app = express();
  
  app.get("/",(req,res,next) => {
    next(new NotFoundError('Resource not found'))
  });
  
  //centrized th error handling
  function errorHandle(err,req,res,next){
    console.error(err.stack);
    res.status(err.statusCode || 500).json({error: err.message});
  }
  
  
  app.use(errorHandle);
  
  app.listen(3000,() => {
    console.log(`server is runnning on port 3000`)
  })
  