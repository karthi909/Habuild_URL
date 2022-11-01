const express = require('express');
const router = express.Router();
const urlController = require('../Controller/controller')

router.post('/url/shorten', urlController.createUrl )
router.get('/:urlCode', urlController.getUrl)

router.put('/urlUpdate/:urlid', urlController.updateUrl)

router.delete('/url/:urlid', urlController.deletedUrl)

module.exports = router