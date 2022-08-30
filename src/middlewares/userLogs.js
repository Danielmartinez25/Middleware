const fs = require('fs');
const path = require('path');

module.exports = 
    (req,res,next) =>{
        fs.appendFileSync(path.join(__dirname,'../Logs/userLogs.txt',`el usuario ingreso a la ruta: ${req.url}`))
    next();
    }
