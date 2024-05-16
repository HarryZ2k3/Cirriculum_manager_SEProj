const userModel = require('../Models/userModels');
const accountModel = require ('../Models/accountModel');
const bcrypt = require("bcrypt");
const pool = require('../Models/index')
const validator = require('validator');
const jwt = require('jsonwebtoken');
const {authenticateId,authenticatePassword} = require('../Models/studentInfor');
const createToken = (_id) => {
    const jwtKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id}, jwtKey, {expiresIn: "3d"})
};
const department = require('../Models/Department');
const registerbuchua = async (req,res) => {
  res.send('register');
}

// [POST] /login
const registerUser = async (req,res) => {
    try {
  const {StudentId,Password} = req.body;
  // console.log("StudentID: ", StudentId);
  // console.log("Password: ", Password);
  const studentid = await authenticateId(StudentId);
  // console.log("studentid: ",studentid);
  if(!studentid){
    return res.status(400).json("Wrong id");
  }
  let user = await accountModel.findOne({studentid});
  if (user){
    loginUser(studentid,Password,req,res); 
    return ;
  } else {
  if (!StudentId || !Password){
     return res.status(400).json("All fields are required....");
  }
  const password = await authenticatePassword(studentid,Password);
  if (!password){
    return res.status(400).json("Wrong password");
  }
  // if (!validator.isEmail(email)){
  //   return res.status(400).json("Email must be a valid email...");
  // }
  // if (!validator.isStrongPassword(password)){
  //   return res.status(400).json("Password must be a strong password...");
  // }
  user = new accountModel({studentid,password});

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = createToken(user._id)
  res.status(200).json({_id: user._id, studentid, token})
}
    } catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// [POST] /login
const loginUser = async(studentid,Password,req,res)=>{
  // const {studentid, password} = req.body;
  try {
    let user = await accountModel.findOne({studentid});
    if (!user) return res.status(400).json("Invalid id or password...");
    const isValidPassword = await bcrypt.compare(Password,user.password);
    if (!isValidPassword){
      return res.status(400).json("Invalid id or password");

    }
    const token = createToken(user._id);

  res.status(200).json({_id: user._id, studentid: user.studentid, password: user.password, token});
  } catch(error){
    console.log(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}


const findUser = async(req,res) =>{
  const userID = req.params.userID;
  try {
    const user = await userModel.findById(userID);
    res.status(200).json(user);
  } catch(error){
    console.log(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}

const getUsers = async(req,res) =>{
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch(error){
    console.log(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}



module.exports = {registerUser,loginUser, findUser, getUsers,registerbuchua};