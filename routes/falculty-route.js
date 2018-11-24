const express = require('express');
const router = express.Router();

const falcultyRouter = require('../controllers/falculty-controller');

//falculty routing
router.get('/falculty/data', falcultyRouter.getFalcultyData);
router.get('/falculty/create-data', falcultyRouter.getFalcultyCreate);
router.post('/falculty/create', falcultyRouter.postFalcultyCreate);
router.get('/falculty/data-delete/:id', falcultyRouter.deleteFalcultyData);
router.get('/falculty/data-modify/:id&:falname&:dean', falcultyRouter.modifyFalcultyData);
router.post('/falculty/data-modify/:id', falcultyRouter.postModifyFalcultyData);
router.get('/falculty/data-search',falcultyRouter.getSearchFalcultyData);

module.exports = router;