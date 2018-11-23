const express = require('express');

const falcultyRouter = require('../controllers/falculty-controller');
const majorRouter = require('../controllers/major-controller');
const subjectRouter = require('../controllers/subject-controller');
const studentRouter = require('../controllers/student-controller');
const scoreRecordRouter = require('../controllers/scoreRecord-controller');
const classRouter = require('../controllers/class-controller');
const courseRouter = require('../controllers/course-controller');


const router = express.Router();

//falculty routing
router.get('/falculty/data', falcultyRouter.getFalcultyData);
router.get('/falculty/create', falcultyRouter.getFalcultyCreate);
router.post('/falculty/create',falcultyRouter.postFalcultyCreate)

//major routing
router.get('/major/data', majorRouter.getMajorData);
router.get('/major/create', majorRouter.getMajorCreate);

//subject routing
router.get('/subject/data', subjectRouter.getSubjectData);
router.get('/subject/create', subjectRouter.getSubjectCreate);

//student routing
router.get('/student/data', studentRouter.getStudentData);
router.get('/student/create', studentRouter.getStudentCreate);

// class routing
router.get('/class/data', classRouter.getClassData);
router.get('/class/create', classRouter.getClassCreate);

// course routing
router.get('/course/data', courseRouter.getCourseData);
router.get('/course/create', courseRouter.getCourseCreate);

// scoreRecord routing
router.get('/scoreRecord/data', scoreRecordRouter.getScoreRecordData);
router.get('/scoreRecord/create', scoreRecordRouter.getScoreRecordCreate);

module.exports = router;