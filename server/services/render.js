
const homeRoutes=(req,res)=>{
    res.render('index')
}

const add_user=(req,res)=>{
    res.render('add_user')
}

const update_user=(req,res)=>{
    res.render('update')
}

module.exports.homeRoutes=homeRoutes
module.exports.add_user=add_user
module.exports.update_user=update_user