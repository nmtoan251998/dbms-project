const express = require('express');
const router = express.Router();

const subjectRouter = require('../controllers/subject-controller');

//subject routing
router.get('/data', subjectRouter.getSubjectData);
router.get('/create-data', subjectRouter.getSubjectCreate);
router.post('/create', subjectRouter.postSubjectCreate);
router.get('/data-delete/:id', subjectRouter.deleteSubjectData);
router.get('/data-modify/:id&:majorid&:subjectname&:credit', subjectRouter.modifySubjectData);
router.post('/data-modify/:id', subjectRouter.postModifySubjectData);
router.get('/data-search',subjectRouter.getSearchSubjectData);

module.exports = router;