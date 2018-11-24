const express = require('express');
const router = express.Router();

const majorRouter = require('../controllers/course-controller');

//major routing
router.get('/course/data', courseRouter.getCourseData);
router.get('/course/create', courseRouter.getCourseCreate);

module.exports = router;