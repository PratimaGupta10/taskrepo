
const express = require("express");
const router = express.Router();
 

const {
    add_Todos,
    todosList,
     viewone_todos,
    update_todos,
     
    deleteTodoslist
   
  
  
} = require("../controller/todos");

 
  

router.post("/posts/add_Todos",add_Todos);
router.get("/posts/todosList", todosList);
router.get("/posts/viewone_todos/:id",viewone_todos);
router.put("/posts/update_todos/:id",update_todos);
 router.delete("/posts/deleteTodoslist/:id",deleteTodoslist);





 
 



module.exports = router;