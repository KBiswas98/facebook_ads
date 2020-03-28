const fs = require("fs");
const express = require("express");
const router = express.Router();

const CampainController = require('../controller/CampainController')

router.get('/', CampainController.showAll)
router.post('/add', CampainController.addData)
router.post('/update', CampainController.updateData)
router.delete('/remove', CampainController.removeData)

module.exports = router