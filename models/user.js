const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
  {

    name: {
      type: String,
    },
    username:{
        type: String,
    },
    email: {
      type: String,
    },
    street: {
      type: String
    },
    suite:{
        type: String
    },
    city:{
        type: String
    },
    zipcode: {
      type: String,
    },
    lat:{
        type: String,
    },
    lng:{
        type: String,
    },
    phone:{
        type: String,
    },
    website:{
        type: String,
    },
    compny_name :{
        type: String,
    },
    catchPhrase:{
        type: String,
    },
    bs:{
        type: String,
    },
    password:{
        type: String,
    }

   

  },



  { timestamps: true }
);


module.exports = mongoose.model("user", thisSchema);