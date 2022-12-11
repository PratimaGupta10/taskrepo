const Post = require("../models/post");
 const resp = require("../helpers/apiResponse");


exports.add_Post = async (req, res) => {
  const { userId,title,body } = req.body;

  const newPost = new Post({
    userId:userId,
    title:title,
    body:body
  });
  newPost
  .save()
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}

exports.PostList = async (req, res) => {
  await Post.find().sort({ sortorder: 1 })
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
};



exports.viewone_Post = async (req, res) => {
   await Post.findOne({ _id: req.params.id })
   .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}
 
exports.update_Post = async (req, res) => {
 
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  
  exports.deletePost = async (req, res) => {
  
    await Post.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));

}
 