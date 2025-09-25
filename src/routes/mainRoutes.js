const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers.js');


router.get('/', mainController.home);
router.get('/home', mainController.home);
router.get('/contact', mainController.contact);
router.get('/about', mainController.about);

/*router.get('/home', (req,res)=> res.send("Platense Mania"));*/
module.exports=router;
