
const express = require("express");
const router = express.Router();
 

const {
    add_Album,
    albumList,
    viewone_Album,
    update_Album,
    deleteAlbum
   
  
  
} = require("../controller/album");

 
  

router.post("/posts/add_Album",add_Album);
router.get("/posts/albumList", albumList);
router.get("/posts/viewone_Album/:id",viewone_Album);
router.put("/posts/update_Album/:id",update_Album);
 router.delete("/posts/deleteAlbum/:id",deleteAlbum);





 
 



module.exports = router;