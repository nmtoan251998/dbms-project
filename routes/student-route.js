const express = require('express');
const router = express.Router();

const studentRouter = require('../controllers/student-controller');

//student routing
router.get('/data', studentRouter.getStudentData);
router.get('/create', studentRouter.getStudentCreate);
router.get('/modify', studentRouter.getStudentModify);

module.exports = router;