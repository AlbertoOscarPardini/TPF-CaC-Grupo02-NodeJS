const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers')
const uploadFiles = require('../middlewares/uploadFiles')

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', uploadFiles.array('images', 2), adminControllers.create_post);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.edit_put);
router.delete('/delete/:id', adminControllers.delete);

module.exports = router;