const express = require('express');
const investController = require('../controllers/investmentController.js');
const router = express.Router();


router.get('/', investController.getAllInvestments);

router.get('/:id', investController.getOneInvestment);

router.post('/', investController.addInvestment);

router.delete('/:id', investController.deleteInvestment);

router.put('/:id', investController.updateInvestment);

module.exports = router;