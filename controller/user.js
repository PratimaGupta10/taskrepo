const User = require("../models/user");
const resp = require("../helpers/apiResponse");
const bcrypt = require("bcryptjs");

  const dotenv = require("dotenv");
 
 
exports.usersignup = async (req, res) => {
    const {
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        phone,
        website,
        compny_name,
        catchPhrase,
        bs,
        password

    } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
  
    const newuser = new User({
        name:name,
        username:username,
        email:email,
        street:street,
        suite:suite,
        city:city,
        zipcode:zipcode,
        lat:lat,
        lng:lng,
        phone:phone,
        website:website,
        compny_name:compny_name,
        catchPhrase:catchPhrase,
        bs:bs,
        password:hashPassword
    
    });
  
    const findexist = await User.findOne({$or:[{
   email: email },{phone: phone }]}
    )
    if (findexist) {
      resp.alreadyr(res);
    } else {
      newuser
        .save()
        .then((data) => resp.successr(res, data))
        
        .catch((error) => resp.errorr(res, error));
    }
  };

  exports.login = async (req, res) => {
    const {  email, password,mobile } = req.body;
    const user = await User.findOne( {   $or: [{ email: email }, { mobile: mobile }],
    });
    console.log("user", user);
    if (user) {
        
      const validPass = await bcrypt.compare(password, user.password);
      if (validPass) {
        res.status(200).send({
          status: true,
          msg: "success",
          user: user,
        });
      } else {
        res.status(400).json({
          status: false,
          msg: "Incorrect Password",
          error: "error",
        });
      }
    } else {
      res.status(400).json({
        status: false,
        msg: "User Doesnot Exist",
        error: "error",
      });
    }
  };

   