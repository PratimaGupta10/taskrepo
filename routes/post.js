
const express = require("express");
const router = express.Router();
 

const {
    add_Post,
    PostList,
    viewone_Post,
    update_Post,
     
    deletePost
   
  
  
} = require("../controller/post");

 
  

router.post("/posts/add_Post",add_Post);
router.get("/posts/PostList", PostList);
router.get("/posts/viewone_Post/:id",viewone_Post);
router.put("/posts/update_Post/:id",update_Post);
 router.delete("/posts/deletePost/:id",deletePost);





 
 



module.exports = router;