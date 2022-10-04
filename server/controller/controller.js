const Userdb=require('../model/model')
const { use } = require('../routes/router')

// create user api

const createUser=async (req,res)=>{
   try{
     // validate request
    if(!req.body){
        res.status(400).send({message:'Content connot be empty'})
        return
    }

    // user 
    const user={
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status,
        
    }

    // save user in database
    let userCreated=await Userdb.create(user)
    res.redirect("/add-user")
    // res.status(201).send({data:userCreated})
   }catch(err){
    res.status(500).send({message:err.message})
   }


}
// get user api

const getUser=async (req,res)=>{
    try{

     if(req.query.id){
       const id=req.query.id
      
      const singleUser=await Userdb.findById(id)

      if(!singleUser){
        res.status(404).send({message:'User Not Found'})
        return
      }
       
       res.status(201).send({data:singleUser})

     }else{   
    let getData=await Userdb.find()
    if(!getData){
         res.status(400).send({message:'Users Not Found'})
        return
    }
    res.status(201).send({data:getData})
     }
    }catch(err){
        res.status(500).send({message:err.message})
    }
}
// update user api

const updateUser=async (req,res)=>{
    try{
        if(!req.body){
             res.status(400).send({message:'Update data cannot be update'})
        return
        }

        const id=req.params.id
        const updatedUser=await Userdb.findByIdAndUpdate(id,req.body,{new:true})

        if(!updatedUser){
            res.status(404).send({message:'user cannot be update'})
        return
        }

          res.status(201).send({data:updatedUser})

    }catch(err){
        res.status(500).send({message:err.message})
    }
}
// delete user api

const deleteUser=async (req,res)=>{
    try{
      const id=req.params.id

      const deleteUser=await Userdb.findByIdAndDelete(id)

      if(!deleteUser){
        res.status(404).send({message:'Cannot be delete this user with this id'})
        return
      }

      res.send({message:'User deleted !!'})
    }catch(err){
        res.status(500).send({message:err.message})
    }
}

module.exports.createUser=createUser
module.exports.getUser=getUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser