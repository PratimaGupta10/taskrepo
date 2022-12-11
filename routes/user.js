
const express = require("express");
const router = express.Router();
 

const {
    usersignup,
    login
   
  
  
} = require("../controller/user");

 
  

router.post("/user/usersignup",usersignup);
router.post("/user/login", login);

 
 



module.exports = router;