const express = require('express');
const router = express.Router();
const {index,music,contact,about,admin,login} = require('../controllers/mainController')
const accessAdmin = require('../middlewares/accessAdmin')

router.get('/',index)
router.get('/about',about)
router.get('/contact',contact)
router.get('/music',music)
router.get('/admin',accessAdmin,admin)
router.get('/login',login)




module.exports = router;