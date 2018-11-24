const express = require('express');
const router = express.Router();

const majorRouter = require('../controllers/major-controller');

//major routing
router.get('/data', majorRouter.getMajorData);
router.get('/create-data', majorRouter.getMajorCreate);
router.post('/create-data', majorRouter.postMajorCreate);
router.get('/data-delete/:id', majorRouter.deleteMajorData);
router.get('/data-modify/:id&:falid&:majorname', majorRouter.modifyMajorData);
router.post('/data-modify/:id', majorRouter.postModifyMajorData);

module.exports = router;