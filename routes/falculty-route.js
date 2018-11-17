const express = require('express');
const router = express.Router();

const falcultyRouter = require('../controllers/falculty-controller');

//falculty routing
router.get('/falculty/data', falcultyRouter.getFalcultyData);
router.get('/falculty/create', falcultyRouter.getFalcultyCreate);
router.get('/falculty/data-delete/:id', falcultyRouter.deleteFalcultyData);
// router.get('/falculty/data-modify/:id&:falname&:dean', falcultyRouter.modifyFalcultyData);
// router.post('/falculty/data-modify/:id&:falname&:dean', falcultyRouter.postModifyFalcultyData);
router.get('/falculty/data-modify/:id&:falname&:dean', falcultyRouter.modifyFalcultyData);
router.get('/falculty/modify', falcultyRouter.getModifyFalcultyData);

module.exports = router;