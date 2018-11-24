const express = require('express');
const router = express.Router();

const courseRouter = require('../controllers/course-controller');

//major routing
router.get('/data', courseRouter.getCourseData);
router.get('/create', courseRouter.getCourseCreate);

module.exports = router;