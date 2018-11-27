const express = require('express');
const router = express.Router();

const functionsRouter = require('../controllers/functions-controller');

router.get('/', functionsRouter.getFunctions)
router.post('/', functionsRouter.postFunctions)

module.exports = router;