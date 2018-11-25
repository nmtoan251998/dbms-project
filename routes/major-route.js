const express = require('express');
const router = express.Router();

const majorRouter = require('../controllers/major-controller');

//major routing
router.get('/major/data', majorRouter.getMajorData);
router.get('/major/data-create', majorRouter.getMajorCreate);
router.post('/major/data-create', majorRouter.postMajorCreate);
router.get('/major/data-delete/:id', majorRouter.deleteMajorData);
router.get('/major/data-modify/:id&:falid&:majorname', majorRouter.modifyMajorData);
router.post('/major/data-modify/:id', majorRouter.postModifyMajorData);
router.get('/major/data-search',majorRouter.getSearchMajorData);
module.exports = router;