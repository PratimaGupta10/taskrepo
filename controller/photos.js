const Photos = require("../models/photos");
 const resp = require("../helpers/apiResponse");


exports.add_Photos = async (req, res) => {
  const { albumId,title,url,thumbnailUrl } = req.body;

  const newPhotos = new Photos({
    albumId:albumId,
    title:title,
    url:url,
    thumbnailUrl:thumbnailUrl
    
  });
  newPhotos
  .save()
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}

exports.photoList = async (req, res) => {
  await Photos.find().sort({ sortorder: 1 })
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
};



exports.viewone_photo = async (req, res) => {
   await Photos.findOne({ _id: req.params.id })
   .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}
 
exports.update_photos = async (req, res) => {
 
    await Photos.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  
  exports.delete_photo = async (req, res) => {
  
    await Photos.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));

}
 