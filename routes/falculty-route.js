const express = require('express');
const router = express.Router();

const falcultyRouter = require('../controllers/falculty-controller');

//falculty routing
router.get('/falculty/data', falcultyRouter.getFalcultyData);
router.get('/falculty/create', falcultyRouter.getFalcultyCreate);

module.exports = router;