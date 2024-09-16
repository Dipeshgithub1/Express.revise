const express = require('express');

const router = express.Router();

router.get("/login",function(req,res){
    res.send("this is login router request")
})


module.exports = router;