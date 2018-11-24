const express = require('express');
const router = express.Router();

const studentDetailRouter = require('../controllers/studentDetail-controller');

//studentDetail routing
router.get('/studentDetail/data', studentDetailRouter.getStudentDetailData);
router.get('/studentDetail/create', studentDetailRouter.getStudentDetailCreate);

module.exports = router;