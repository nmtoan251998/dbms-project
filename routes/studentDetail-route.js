const express = require('express');
const router = express.Router();

const studentDetailRouter = require('../controllers/studentDetail-controller');

//studentDetail routing
router.get('/data', studentDetailRouter.getStudentDetailData);
router.get('/create', studentDetailRouter.getStudentDetailCreate);

module.exports = router;