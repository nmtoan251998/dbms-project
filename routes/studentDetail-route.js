const express = require('express');
const router = express.Router();

const studentDetailRouter = require('../controllers/studentDetail-controller');

//studentDetail routing
router.get('/data', studentDetailRouter.getStudentDetailData);
router.get('/create-data', studentDetailRouter.getStudentDetailCreate);
router.post('/create', studentDetailRouter.postStudentDetailCreate);
router.get('/data-delete/:id', studentDetailRouter.deleteStudentDetailData);
router.get('/data-modify/:id&:dob&:gender&:city&:address&:phone', studentDetailRouter.modifyStudentDetailData);
router.post('/data-modify/:id', studentDetailRouter.postModifyStudentDetailData);
router.get('/data-search',studentDetailRouter.getSearchStudentDetailData);

module.exports = router;