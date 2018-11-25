const express = require('express');
const router = express.Router();

const courseRouter = require('../controllers/course-controller');

router.get('/data', courseRouter.getCourseData);
router.post('/create',courseRouter.postCourseCreate);
router.get('/data-create', courseRouter.getCourseCreate);
router.get('/data-delete/:id', courseRouter.deleteCourseData);
router.get('/data-modify/:courseid&:coursename&:startyear&:endyear', courseRouter.modifyCourseData);
router.post('/data-modify/:id', courseRouter.postModifyCourseData);
router.get('/data-search',courseRouter.getSearchCourseData);

module.exports = router;