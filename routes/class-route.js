const express = require('express');
const router = express.Router();

const classRouter = require('../controllers/class-controller');

//class routing
router.get('/data', classRouter.getClassData);
router.get('/create-data', classRouter.getClassCreate);
router.post('/create', classRouter.postClassCreate);
router.get('/data-delete/:id', classRouter.deleteClassData);
router.get('/data-modify/:id&:majorid&:classname&:headteacher', classRouter.modifyClassData);
router.post('/data-modify/:id', classRouter.postModifyClassData);
router.get('/data-search',classRouter.getSearchClassData);

module.exports = router;