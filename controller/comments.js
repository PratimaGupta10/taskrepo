const Comment = require("../models/comments");
 const resp = require("../helpers/apiResponse");


exports.add_Comment = async (req, res) => {
  const { postId,userId,body } = req.body;

  const newComment = new Comment({
    postId:postId,
    userId:userId,
    body:body
  });
  newComment
  .save()
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}

exports.CommentList = async (req, res) => {
  await Comment.find().sort({ sortorder: 1 })
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
};



exports.viewone_Comment = async (req, res) => {
   await Comment.findOne({ _id: req.params.id })
   .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}
 
exports.update_Comment = async (req, res) => {
 
    await Comment.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  
  exports.deleteComment = async (req, res) => {
  
    await Comment.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));

}
 