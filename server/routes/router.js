const express=require('express')
const route=express.Router()
const services=require('../services/render')

// Roote Route
route.get('/',services.homeRoutes)

// add user routing
route.get('/add-user',services.add_user)

// update user routing
route.get('/update-user',services.update_user)


module.exports=route