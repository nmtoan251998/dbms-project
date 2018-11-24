const express = require('express');

const falcultyRouter = require('../controllers/falculty-controller');
const majorRouter = require('../controllers/major-controller');
const subjectRouter = require('../controllers/subject-controller');
const studentRouter = require('../controllers/student-controller');
const scoreRecordRouter = require('../controllers/scoreRecord-controller');
const classRouter = require('../controllers/class-controller');
const courseRouter = require('../controllers/course-controller');
const studentDetailRouter = require('../controllers/studentDetail-controller');


const router = express.Router();

//falculty routing
router.get('/falculty/data', falcultyRouter.getFalcultyData);
router.get('/falculty/create', falcultyRouter.getFalcultyCreate);
router.post('/falculty/create',falcultyRouter.postFalcultyCreate)

//major routing
router.get('/major/data', majorRouter.getMajorData);
router.get('/major/create', majorRouter.getMajorCreate);
router.get('/major/modify', majorRouter.getMajorModify);

//subject routing
router.get('/subject/data', subjectRouter.getSubjectData);
router.get('/subject/create', subjectRouter.getSubjectCreate);
router.get('/subject/modify', subjectRouter.getSubjectModify);

//student routing
router.get('/student/data', studentRouter.getStudentData);
router.get('/student/create', studentRouter.getStudentCreate);
router.get('/student/modify', studentRouter.getStudentModify);

// class routing
router.get('/class/data', classRouter.getClassData);
router.get('/class/create', classRouter.getClassCreate);
router.get('/class/modify', classRouter.getClassModify);

// course routing
router.get('/course/data', courseRouter.getCourseData);
router.get('/course/create', courseRouter.getCourseCreate);
router.get('/course/modify', courseRouter.getCourseModify);

// scoreRecord routing
router.get('/scoreRecord/data', scoreRecordRouter.getScoreRecordData);
router.get('/scoreRecord/create', scoreRecordRouter.getScoreRecordCreate);

// studentDetail routing
router.get('/studentDetail/data', studentDetailRouter.getStudentDetailData);
router.get('/studentDetail/create', studentDetailRouter.getStudentDetailCreate);

module.exports = router;