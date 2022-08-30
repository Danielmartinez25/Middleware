let admins = ["Ada","Greta","Tim","Vim"];


module.exports = (req,res,next) =>{
    if(admins.includes(req.query.user)){
        next();
    }
    else{
        res.redirect('/')
    }
}