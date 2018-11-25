const express = require('express');
const router = express.Router();

const courseRouter = require('../controllers/course-controller');

//major routing

router.get('/course/data', courseRouter.getCourseData);
router.post('/course/create',courseRouter.postCourseCreate);
router.get('/course/data-create', courseRouter.getCourseCreate);
router.get('/course/data-delete/:id', courseRouter.deleteCourseData);
router.get('/course/data-modify/:id&:falname&:dean', courseRouter.modifyCourseData);
router.post('/course/data-modify/:id', courseRouter.postModifyCourseData);
router.get('/course/data-search',courseRouter.getSearchCourseData);


module.exports = router;