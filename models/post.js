const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
  {

    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    title:{
        type: String
    },
    body: {
      type: String,
      
    },
    
     
   

  },



  { timestamps: true }
);


module.exports = mongoose.model("post", thisSchema);