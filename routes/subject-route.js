const express = require('express');
const router = express.Router();

const subjectRouter = require('../controllers/subject-controller');

//subject routing
router.get('/data', subjectRouter.getSubjectData);
router.get('/create', subjectRouter.getSubjectCreate);

module.exports = router;