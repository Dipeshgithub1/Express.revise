const express = require('express')


const homeRoute = require('../routes/home')
const loginRoute = require('../routes/login')


const app = express();

app.use("/",homeRoute);

app.use("/",loginRoute);


app.listen(3000,() => {
  console.log('server on running on port')
})