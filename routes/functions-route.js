const express = require('express');
const router = express.Router();

const functionsRouter = require('../controllers/functions-controller');

router.get('/', functionsRouter.getFunctions)
router.get('/avg-point', functionsRouter.getAvgPoint)
router.get('/bad-stu', functionsRouter.getBadStu)
router.get('/failed-subject', functionsRouter.getFailedSubject)
router.get('/full-stu-info', functionsRouter.getFullStuInfo)
router.get('/stu-scho', functionsRouter.getStuScho)
router.get('/total-stu', functionsRouter.getTotalStudent)

module.exports = router;