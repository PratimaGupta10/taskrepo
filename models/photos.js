const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
  {

    albumId: {
        type: Schema.Types.ObjectId,
        ref: "album",
    },
    title:{
        type: String
    },
    url:{
        type: String
    },
    thumbnailUrl:{
type: String

    
    }
  },

  { timestamps: true }
);


module.exports = mongoose.model("photos", thisSchema);