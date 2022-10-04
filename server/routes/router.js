const express=require('express')
const route=express.Router()
const controller=require('../controller/controller')
const services=require('../services/render')

// Roote Route
route.get('/',services.homeRoutes)

// add user routing
route.get('/add-user',services.add_user)

// update user routing
route.get('/update-user',services.update_user)

// api
route.post('/add/users',controller.createUser)
route.get('/get/users',controller.getUser)
route.put('/update/users/:id',controller.updateUser)
route.delete('/delete/users/:id',controller.deleteUser)


module.exports=route