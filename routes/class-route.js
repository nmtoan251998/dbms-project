const express = require('express');
const router = express.Router();

const classRouter = require('../controllers/class-controller');

//major routing
router.get('/data', classRouter.getClassData);
router.get('/create', classRouter.getClassCreate);
router.get('/modify', classRouter.getClassModify);

module.exports = router;