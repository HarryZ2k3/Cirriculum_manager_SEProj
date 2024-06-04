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
const { authenticateAdminId, authenticateAdminPassword } = require('../Models/Admin');
const adminModel = require('../Models/adminModel');
const registerbuchua = async (req,res) => {
  res.send('register');
}

// [POST] /login
const registerUser = async (req,res) => {
    try {
  const {StudentId,Password} = req.body;
  const adminid = await authenticateAdminId(StudentId);

  if (adminid){
    let user = await adminModel.findOne({adminid});
    if (user){
      loginAdmin(adminid,Password,req,res); 
      return ;
    } else {
    if (!StudentId || !Password){
       return res.status(400).json("All fields are required....");
    }
    const password = await authenticateAdminPassword(adminid,Password);
    if (!password){
      return res.status(400).json("Wrong password");
    }
    user = new adminModel({adminid,password});
  
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = createToken(user._id)
    console.log("Admin account: ", user);
    res.status(200).json({_id: user._id, adminid, token})
  }
  }
  const studentid = await authenticateId(StudentId);

  if(!studentid){
    return res.status(400).json("Wrong id");
  }
  let user = await accountModel.findOne({studentid});
  if (user){
    loginStudent(studentid,Password,req,res); 
    return ;
  } else {
  if (!StudentId || !Password){
     return res.status(400).json("All fields are required....");
  }
  const password = await authenticatePassword(studentid,Password);
  if (!password){
    return res.status(400).json("Wrong password");
  }
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
const loginStudent = async(studentid,Password,req,res)=>{
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


const loginAdmin = async(adminid,Password,req,res)=>{
  try {
    let user = await adminModel.findOne({adminid});
    if (!user) return res.status(400).json("Invalid id or password...");
    const isValidPassword = await bcrypt.compare(Password,user.password);
    if (!isValidPassword){
      return res.status(400).json("Invalid id or password");

    }
    const token = createToken(user._id);

  res.status(200).json({_id: user._id, studentid: user.adminid, password: user.password, token});
  } catch(error){
    console.log(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}


const findUser = async(req,res) =>{
  const userID = req.params.userID;
  try {
    const user = await accountModel.findById(userID);
    res.status(200).json(user);
  } catch(error){
    console.log(error);
    res.status(500).json({ message: 'No found user', error: error.message });
  }
}

const changePassword = async(req,res)=>{
  const studentid = req.params.userID;
  const {oldPassword,newPassword, authenticatePassword} = req.body;
  try {
    let user = await accountModel.findOne({studentid});
    if (!user) return res.status(400).json("User error...");
    const isValidPassword = await bcrypt.compare(oldPassword,user.password);
    if (!isValidPassword){
      return res.status(400).json("Invalid old password");

    }
    if (authenticatePassword===newPassword){
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();
    res.status(200).json("Successfully changed password !!!")
  }
  else {
    return res.status(400).json("Wrong new password")
  }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Cannot change password', error: error.message });
  }
}

const getUsers = async(req,res) =>{
  try {
    const user = await accountModel.find();
    res.status(200).json(user);
  } catch(error){
    console.log(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}



module.exports = {registerUser,loginStudent, loginAdmin ,findUser, getUsers,changePassword};