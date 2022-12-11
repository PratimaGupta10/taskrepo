
const express = require("express");
const router = express.Router();
 

const {
    usersignup,
    login,
    updateUser,
    getoneUser,
    userlist,
    deleteUser
   
  
  
} = require("../controller/user");

 
  

router.post("/posts/usersignup",usersignup);
router.post("/posts/login", login);
router.put("/posts/updateUser/:id",updateUser);
router.get("/posts/getoneUser/:id",getoneUser);
router.get("/posts/userlist",userlist);
router.delete("/posts/deleteUser/:id",deleteUser);





 
 



module.exports = router;