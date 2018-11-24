const express = require('express');
const router = express.Router();

const studentRouter = require('../controllers/student-controller');

//student routing
router.get('/student/data', studentRouter.getStudentData);
router.get('/student/create', studentRouter.getStudentCreate);
router.get('/student/modify', studentRouter.getStudentModify);

module.exports = router;