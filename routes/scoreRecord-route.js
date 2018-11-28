const express = require('express');
const router = express.Router();

const scoreRecordRouter = require('../controllers/scoreRecord-controller');

//score record routing
router.get('/data', scoreRecordRouter.getScoreRecordData);
router.get('/create-data', scoreRecordRouter.getScoreRecordCreate);
router.post('/create', scoreRecordRouter.postScoreRecordCreate);
router.get('/data-delete/:id', scoreRecordRouter.deleteScoreRecordData);
router.get('/data-modify/:id&:studentid&:year&:semester&:score', scoreRecordRouter.modifyScoreRecordData);
router.post('/data-modify/:id', scoreRecordRouter.postModifyScoreRecordData);
router.get('/data-search',scoreRecordRouter.getSearchScoreRecordData);

module.exports = router;