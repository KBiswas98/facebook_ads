const fs = require("fs");
const express = require("express");
const router = express.Router();

const AdsController = require('../controller/AdSetController')

router.get('/', AdsController.showAll)
router.post('/add', AdsController.addData)
router.post('/update', AdsController.updateData)
router.delete('/remove', AdsController.removeData)

module.exports = router