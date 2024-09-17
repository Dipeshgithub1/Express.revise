//Error handling


//Basic error handling

const express = require('express');

const app = express();

app.get('/',function(req,res){
  throw new Error('something went wrong!')
});

app.listen(3000,() => {
  console.log(`server is running on 3000 port`)
})