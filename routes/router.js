const express = require('express');

const router = express.Router();

const falcultyRouter = require('./falculty-route.js');
const majorRouter = require('./major-route');
const subjectRouter = require('./subject-route');
const studentRouter = require('./student-route');
const scoreRecordRouter = require('./scoreRecord-route');
const classRouter = require('./class-route');
const courseRouter = require('./course-route');
const studentDetailRouter = require('./studentDetail-route');
const higherFunctionsRouter = require('./higher-functions-route.js');

router.use('/falculty', falcultyRouter);
router.use('/major', majorRouter);
router.use('/subject', subjectRouter);
router.use('/student', studentRouter);
router.use('/scoreRecord', scoreRecordRouter);
router.use('/class', classRouter);
router.use('/course', courseRouter);
router.use('/studentDetail', studentDetailRouter);
router.use('/functions', higherFunctionsRouter);

module.exports = router;