const express = require('express');
const router = express.Router();

const scoreRecordRouter = require('../controllers/scoreRecord-controller');

//major routing
router.get('/scoreRecord/data', scoreRecordRouter.getScoreRecordData);
router.get('/scoreRecord/create', scoreRecordRouter.getScoreRecordCreate);

module.exports = router;