const express = require('express');
const router = express.Router();

const majorRouter = require('../controllers/major-controller');

//major routing
router.get('/major/data', majorRouter.getMajorData);
router.get('/major/create-data', majorRouter.getMajorCreate);
router.post('/major/create-data', majorRouter.postMajorCreate);
router.get('/major/data-delete/:id', majorRouter.deleteMajorData);
router.get('/major/data-modify/:id&:falid&:majorname', majorRouter.modifyMajorData);
router.post('/major/modify/:id', majorRouter.postModifyMajorData);

module.exports = router;