const express = require('express')
const router = express.Router();

//handling request using router

router.get("/home",function(req,res,next){
    res.send("This is first request for router home")
});


//impoer the router

module.exports = router;