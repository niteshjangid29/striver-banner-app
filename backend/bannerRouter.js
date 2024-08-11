const express = require('express');
const router = express.Router();
const bannerController = require('./bannerController');

router.get('/banners', bannerController.getAll);
router.get('/banners/latest', bannerController.getLatestVisible);
router.get('/banner/:id', bannerController.getById);
router.post('/banner', bannerController.create);
router.put('/banner/:id', bannerController.update);
router.delete('/banner/:id', bannerController.delete);

module.exports = router;