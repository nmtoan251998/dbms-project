const express = require('express');
const router = express.Router();

const scoreRecordRouter = require('../controllers/scoreRecord-controller');

//major routing
router.get('/data', scoreRecordRouter.getScoreRecordData);
router.get('/create', scoreRecordRouter.getScoreRecordCreate);

module.exports = router;