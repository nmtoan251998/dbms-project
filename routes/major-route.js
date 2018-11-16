const express = require('express');
const router = express.Router();

const majorRouter = require('../controllers/major-controller');

//major routing
router.get('/major/data', majorRouter.getMajorData);
router.get('/major/create', majorRouter.getMajorCreate);
router.get('/major/data-delete/:id', majorRouter.deleteMajorData);

module.exports = router;