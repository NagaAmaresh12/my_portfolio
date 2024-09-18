const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();


// Contact route
router.post('/contact', contactController);
router.get('/contact', (req,res)=>{
    res.send('Get request to contact page');
    console.log('getting the contact page');
});

module.exports = router;
