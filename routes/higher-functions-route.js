const express = require('express');
const router = express.Router();

const functionsRouter = require('../controllers/higher-functions-controller');

router.get('/', functionsRouter.getFunctions)

module.exports = router;