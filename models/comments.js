const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
  {

    postId: {
        type: Schema.Types.ObjectId,
        ref: "post",
    },
    body:{
        type: String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "post",
    }

  },

  { timestamps: true }
);


module.exports = mongoose.model("comment", thisSchema);