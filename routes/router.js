const express = require('express');

const falcultyRouter = require('../controllers/falculty-controller');
const majorRouter = require('../controllers/major-controller');
const subjectRouter = require('../controllers/subject-controller');
const studentRouter = require('../controllers/student-controller');

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

module.exports = router;