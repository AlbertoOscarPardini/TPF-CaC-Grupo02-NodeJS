const express = require('express');
const router = express.Router();
const mainConstrollers = require('../controllers/mainControllers')

router.get('/home', mainConstrollers.home);
router.get('/contact', mainConstrollers.contact);
router.get('/about', mainConstrollers.about);
router.get('/faqs', mainConstrollers.faqs);

module.exports = router;