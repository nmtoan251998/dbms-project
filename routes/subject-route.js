const express = require('express');
const router = express.Router();

const subjectRouter = require('../controllers/subject-controller');

//subject routing
router.get('/subject/data', subjectRouter.getSubjectData);
router.get('/subject/create', subjectRouter.getSubjectCreate);

module.exports = router;