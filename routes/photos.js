
const express = require("express");
const router = express.Router();
 

const {
    add_Photos,
    photoList,
    viewone_photo,
     update_photos,
     
    delete_photo
   
  
  
} = require("../controller/photos");

 
  

router.post("/posts/add_Photos",add_Photos);
router.get("/posts/photoList", photoList);
router.get("/posts/viewone_photo/:id",viewone_photo);
router.put("/posts/update_photos/:id",update_photos);
 router.delete("/posts/delete_photo/:id",delete_photo);





 
 



module.exports = router;