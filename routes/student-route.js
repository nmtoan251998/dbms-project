const express = require('express');
const router = express.Router();

const studentRouter = require('../controllers/student-controller');

//student routing
router.get('/data', studentRouter.getStudentData);
router.get('/create-data', studentRouter.getStudentCreate);
router.post('/create', studentRouter.postStudentCreate);
router.get('/data-delete/:id', studentRouter.deleteStudentData);
router.get('/data-modify/:id&:classid&:studentname', studentRouter.modifyStudentData);
router.post('/data-modify/:id', studentRouter.postModifyStudentData);
router.get('/data-search',studentRouter.getSearchStudentData);

module.exports = router;