const express = require('express');
const {User} = require('../models/user');
const {UserProfile} = require('../models/userProfile');


const router = express.Router();



router.get('/getuser' , async (req , res) =>{

     const userProfile = await UserProfile.findById(req.body.userId);
      res.send(userProfile);

});

//create a new user on the User table only

router.post('/createuser' , async (req , res) =>{

  const user = await User.create({ id: req.body.id , type: req.body.type });
  console.log(`user created successfully`);
  res.send(user)

});
  
//update on User table

router.put('/updateusers' , async (req , res) =>{

    const user = await User.update({
      type: req.body.type
    },
    {
      where: {type: req.body.type}
    });

    res.send(user);

});

router.delete('/deleteuser' , async (req , res) =>{

    const user = await User.destroy({
      where: {
        userId: req.body.userId ,
        email: undefined
      }
    });
    res.send(user);

});

router.get('/getspecificusers' , async (req , res) =>{

 const users = await User.findAll({
    where: {
      type: req.body.type
    }
  });
    res.send(users);

});



module.exports=router;