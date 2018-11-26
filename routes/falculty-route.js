const express = require('express');
const router = express.Router();

const falcultyRouter = require('../controllers/falculty-controller');

//falculty routing
router.get('/data', falcultyRouter.getFalcultyData);
router.get('/create-data', falcultyRouter.getFalcultyCreate);
router.post('/create', falcultyRouter.postFalcultyCreate);
router.get('/data-delete/:id', falcultyRouter.deleteFalcultyData);
router.get('/data-modify/:id&:falname&:dean', falcultyRouter.modifyFalcultyData);
router.post('/data-modify/:id', falcultyRouter.postModifyFalcultyData);
router.get('/data-search',falcultyRouter.getSearchFalcultyData);

module.exports = router;