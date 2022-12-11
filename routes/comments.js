
const express = require("express");
const router = express.Router();
 

const {
    add_Comment,
    CommentList,
    viewone_Comment,
    update_Comment,
     
     deleteComment
   
  
  
} = require("../controller/comments");

 
  

router.post("/posts/add_Comment",add_Comment);
router.get("/posts/CommentList", CommentList);
router.get("/posts/viewone_Comment/:id",viewone_Comment);
router.put("/posts/update_Comment/:id",update_Comment);
 router.delete("/posts/deleteComment/:id",deleteComment);





 
 



module.exports = router;