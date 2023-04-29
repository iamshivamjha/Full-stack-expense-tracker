const express=require('express');
const router=express.Router();
const User =require('./User')
const {body , validationResult } = require('express-validator');
const bcrypt =require('bcryptjs'); 
const jwt=require("jsonwebtoken") 
const jwtSecret ="MynameisEndtoEndYoutubeChannel$#"

//middleware function  are used to validate the request body. 
//These functions come from the express-validator package, which provides a set of validation functions for validating form inputs.

//This is a POST request handler for the /loginuser endpoint of an Express.js router. 
//It takes in the user's email and password from the request body and attempts to log in the user by finding their data in the database and checking if the provided password matches.
router.post("/loginuser",[
    body('email',).isEmail(),
    body('password','Incorrect password').isLength({ min: 5 }),]
    ,async(req,res)=>{
    const errors = validationResult(req);
    //The validationResult() function is called with the req object to check if there were any validation errors. 
    //If there are errors, they are returned as a response with status code 400 (Bad Request).
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    
    //The User.findOne() method is used to find a user with the specified email in the MongoDB database
    let email=req.body.email;
    try{
       let userdata= await User.findOne({email});//find pura data hi return ktrta h
       if(!userdata){
        return res.status(400).json({ errors: "try login again with correct credential" });
       }
       const pwdCompare= await bcrypt.compare(req.body.password,userdata.password)

       if(!pwdCompare){
         return res.status(400).json({ errors: "try login again with correct credential" });

       }
       const data1 ={
        user:{
            id:userdata.id
        }

       }
       const authToken=jwt.sign(data1,jwtSecret)
       return res.json({success:true,authToken:authToken});

    }catch(error){
        console.log(error)
        res.json({success:false});
    }
    
})



router.post("/createuser", [
body('email',).isEmail(),

body('password','Incorrect password').isLength({ min: 5 }),
body('name').isLength({ min: 5 })]

,async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt =await bcrypt.genSalt(10);
    let secPassword =await bcrypt.hash(req.body.password,salt)

    try{
       await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location, 
            
        }).then(res.json({success:true}))
        

    }catch(error){
        console.log(err);
        res.json({success:false});

    }

})





module.exports = router;