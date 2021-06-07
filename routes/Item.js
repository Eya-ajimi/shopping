const express = require ("express");
const { findByIdAndDelete } = require("../modules/Item");
const router = express.Router()

//Items
const Item = require('../modules/Item');
 //  path:  http://localhost:5000/api/items/
// get all users
// public or private
router.get("/",(req,res)=>{
    Item.find()
    .then(Items=> res.json({msg:"data  fetched",Items}))
    .catch(err=>console.log(err))
})


 //  path:  http://localhost:5000/api/items/addpost
// add a post
// public or private
router.post("/addpost",(req,res)=>{
    const newpost=new Item ({
       ...req.body
       
    })
    newpost.save()
    .then(item=> res.json({item}))
    .catch(err=>console.log(err))
})


 //  path:  http://localhost:5000/api/items/deletepost/:id
// add a post
// public or private
router.delete("/deletepost/:id",(req,res)=>{
   Item.findByIdAndDelete({_id:req.params.id})
   
    .then(item=> res.json({ msg:"post is deleted" ,item}))
    .catch(err=>console.log(err))
})

module.exports= router ;