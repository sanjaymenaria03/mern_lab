const userModel = require("../database/modals/user");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
exports.signup = async(req, res) => {
    try {
        const userData = req.body;
        const userExists = await userModel.findOne({ email: userData.email });

        if (userExists) {
            res.send({
                "statuscode": 200,
                "message": "User already exist. Please try to login",
                error: false,
                data: userExists,
            });

        } else {
            const hash = crypto.createHash("sha1");
            hash.update(userData.password + process.env.SALT);
            const hashpassword = hash.digest("hex");
    
            const newUser = new userModel({
                name: userData.name,
                email: userData.email,
                password: hashpassword,
                mobile_number: userData.mobile_number,
                dob: userData.dob,
                address: userData.address,
            });
            await newUser.save();
    
            const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);
            res.send({
                statusCode: 200,
                message: "User created successfully",
                error: false,
                data: newUser,
                token: token,
            });
        }
        
    } catch (error) {
        res.send({
            statusCode: 400,
            message: error.message,
            error: true,
            data: null,
        });
    }

};



exports.signin = async (req, res) => {
    try {
      const userData = req.body;
  
      const userExists = await userModel.findOne({ email: userData.email });
  
      if (!userExists) {
        res.send({
          statusCode: 200,
          message: "user does not exists",
          error: false,
          data: userExists,
        });
      } else {
        const hash = crypto.createHash("sha1");
        hash.update(userData.password + process.env.SALT);
        const hashPassword = hash.digest("hex");
        const userMatch = await userModel.findOne({
          email: userData.email,
          password: hashPassword,
        });
  
        if (userMatch) {
          const tokenM = jwt.sign(
            { userId: userMatch._id },
            process.env.SECRET_KEY
          );
          res.send({
            statuscode: 200,
            message: "login sucessfull",
            data: userMatch,
            token: tokenM,
          });
        } else {
          res.send({
            statusCode: 401,
            message: "unauthorised user",
            error: true,
            data: null,
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.send({
        statusCode: 400,
        message: error.message,
        error: true,
        data: null,
      });
    }
  };
