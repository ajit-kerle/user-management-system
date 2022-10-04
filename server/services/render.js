const axios=require('axios')
const express=require('express')
const app=express()
app.set('view engine', 'ejs')
const homeRoutes=(req,res)=>{
    // make get request to add users
    
    axios.get('http://localhost:3000/get/users')
       .then(function(response){
    
        res.render('index',{user:response.data.data})
       
       })
       .catch(err=>{
        res.send(err)
       })
}

const add_user=(req,res)=>{
    res.render('add_user')
}

const update_user=(req,res)=>{
    axios.get("http://localhost:3000/get/users",{
        params:{id:req.query.id}
    })
    .then((userdata)=>{
        console.log(userdata.data.data)
        res.render('update_user',{user:userdata.data.data})
    })
    .catch(err=>{
        res.send(err)
    })

    
}

module.exports.homeRoutes=homeRoutes
module.exports.add_user=add_user
module.exports.update_user=update_user