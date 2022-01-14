const express = require('express');
const mfController = require('../controllers/mfController.js');
const router = express.Router();


router.get('/', mfController.getAllMFs);

router.get('/:id', mfController.getOneMF);

router.post('/', mfController.addMF);

router.delete('/:id', mfController.deleteMF);

router.put('/:id', mfController.updateMF);

module.exports = router;