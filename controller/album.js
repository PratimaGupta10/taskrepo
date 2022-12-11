const Album = require("../models/album");
 const resp = require("../helpers/apiResponse");


exports.add_Album = async (req, res) => {
  const { userId,title } = req.body;

  const newAlbum = new Album({
    userId:userId,
    title:title,
    
  });
  newAlbum
  .save()
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}

exports.albumList = async (req, res) => {
  await Album.find().sort({ sortorder: 1 })
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
};



exports.viewone_Album = async (req, res) => {
   await Album.findOne({ _id: req.params.id })
   .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}
 
exports.update_Album = async (req, res) => {
 
    await Album.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  
  exports.deleteAlbum = async (req, res) => {
  
    await Album.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));

}
 